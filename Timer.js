// models/Timer.js
const mongoose = require('mongoose');

const timerSchema = new mongoose.Schema({
  propertyId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Property', // Assuming you have a Property model
  },
  startTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number, // Duration in milliseconds
    required: true,
  },
  status: {
    type: String,
    enum: ['running', 'stopped'],
    default: 'stopped',
  },
}, { timestamps: true });

module.exports = mongoose.model('Timer', timerSchema);