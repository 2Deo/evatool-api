const mongoose = require('../config/database')
const { Schema } = mongoose
const photo = "https://www.google.nl/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjG7faytMHXAhVSL1AKHYG6D1MQjRwIBw&url=https%3A%2F%2Fwww.turbosquid.com%2F3d-model%2Fhead&psig=AOvVaw0IQggmAzb9-XfGON_JWJEy&ust=1510863701104328"


const evaluationSchema = new Schema({
  colorCode: { type: String, default: "green"},
  date: { type: Date, default: Date.now },
  description: { type: String }
})

const studentSchema = new Schema({
  name: { type: String, required: true },
  evaluation: [evaluationSchema],
  photo: { type: String, default: photo },
  batchId: { type: Number, ref: "batches"}
})

const batchSchema = new Schema({
  students: [studentSchema],
  batchNumber: { type: Number },
  startDate: { type: String },
  endDate: { type: String },
})

module.exports = mongoose.model('batches', batchSchema)
