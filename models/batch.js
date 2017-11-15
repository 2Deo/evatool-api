const mongoose = require('../config/database')
const { Schema } = mongoose
const students = require('./student').schema

const batchSchema = new Schema({
  batchNumber: { type: Number, required: true},
  startDate: { type: String },
  endDate: { type: String },
  students: [students]
})

module.exports = mongoose.model('batches', batchSchema)