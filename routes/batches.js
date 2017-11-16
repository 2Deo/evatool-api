const router = require('express').Router()
const { Batch } = require('../models')
const passport = require('../config/auth')

const authenticate = passport.authorize('jwt', { session: false })

router.get('/batches', (req, res, next) => {
  Batch.find()
    // Newest student first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((batches) => res.json(batches))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })
  .get('/batches/:id', (req, res, next) => {
    const id = req.params.id
    Batch.findById(id)
      .then((batch) => {
        if (!batch) { return next() }
        res.json(batch)
      })
      .catch((error) => next(error))
  })
  .post('/batches', (req, res, next) => {
    let newBatch = req.body
    console.log('routes batch', req.body)
    Batch.create(newBatch)
      .then((batch) => res.json(batch))
      .catch((error) => next(error))
  })


  .patch('/batches/:id', authenticate, (req, res, next) => {

      const id = req.body.batchId
      const student = {
        name: req.body.student.name,
        image_url: req.body.student.image_url,
        evaluations: req.body.student.evaluations
      }

      const patchForBatch = req.body



    Batch.findById(id)
      .then((batch) => {
        if (!batch) { return next() }
        var students = [...batch.students, student]
        const updatedBatch = { ...batch, students: students }


        Batch.findByIdAndUpdate(id, { $set: updatedBatch }, { new: true })
          .then((batch) => res.json(updatedBatch))
          .catch((error) => next(error))

  })
})

module.exports = router
