const mongoose = require('../config/database')
const { Schema } = mongoose


const evaluationSchema = new Schema({
  evaluation: { type: Number, default: 0},
  date: { type: Date, default: Date.now },
  description: { type: String },
  colorCode: { type: String, default: "green" }
})

const studentSchema = new Schema({
  name: { type: String, default: "John Ruth"},
  evaluation: [evaluationSchema],
  photo: { type: String, required: true },
  batchId: { type: Schema.Types.ObjectId, ref: 'batches'}
})

const batchSchema = new Schema({
  students: [studentSchema],
  batchNumber: { type: Number },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, {usePushEach:true})

module.exports = mongoose.model('batches', batchSchema)
