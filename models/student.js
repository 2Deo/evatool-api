const mongoose = require('../config/database')
const { Schema } = mongoose
// const studentSchema = require mongoose.model('students', studentSchema)
// const Student = require

const groupSchema = new Schema({
  amount: { type: String, required: false },
  name: { type: String, required: true },
  optional: { type: Boolean, required: true, 'default': false }
})

const evaluationSchema = new Schema({
  cookingTime: { type: Number, required: false }, // in minutes
  title: { type: String, required: false },
  description: { type: String, required: true }
})

const studentSchema = new Schema({
  name: { type: String, required: true },
  evaluation: { type: String, required: false },
  photo: { type: String, default: 'http://via.placeholder.com/500x180?text=No%20Image' },
  colorCode: { type: Number, default: true },
  vegetarian: { type: Boolean, default: false },
  pescatarian: { type: Boolean, default: false },
  cookingTime: { type: Number, required: false }, // in minutes
  likedBy: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  authorId: { type: Schema.Types.ObjectId, ref: 'users' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('students', studentSchema)
