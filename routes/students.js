// routes/students.js
const router = require('express').Router()
const { Student } = require('../models')
const passport = require('../config/auth')

const authenticate = passport.authorize('jwt', { session: false })

router.get('/students', (req, res, next) => {
  Student.find()
    // Newest student first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((students) => res.json(students))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })
  .get('/students/:id', (req, res, next) => {
    const id = req.params.id
    Student.findById(id)
      .then((student) => {
        if (!student) { return next() }
        res.json(student)
      })
      .catch((error) => next(error))
  })
  .post('/students', (req, res, next) => {

  })

module.exports = router
