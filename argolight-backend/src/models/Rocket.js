const mongoose = require('mongoose');

const rocketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  active: {
    type: Boolean,
    default: false
  },
  firstFlight: {
    type: Date
  },
    country: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  coverUrl: {
    type: String,
    required: true
  },
  height: { 
    type: Number 
  },
  diameter: { 
    type: Number 
  },
  mass: { 
    type: Number 
  },
  payloadCapacity: { 
    type: Number 
  },
  stages: { 
    type: Number 
  },
  wikipedia: { 
    type: String 
  }
});

module.exports = mongoose.model('Rocket', rocketSchema);
