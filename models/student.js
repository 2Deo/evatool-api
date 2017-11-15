const mongoose = require('../config/database')
const { Schema } = mongoose

const evaluationSchema = new Schema({
  colorCode: { type: String, default: "green"},
  date: { type: Date, default: Date.now },
  description: { type: String }
})

const studentSchema = new Schema({
  name: { type: String, required: true },
  evaluation: [evaluationSchema],
  photo: { type: String },
  batchId: { type: Number, ref: "batches"}
})

module.exports = mongoose.model('students', studentSchema)
