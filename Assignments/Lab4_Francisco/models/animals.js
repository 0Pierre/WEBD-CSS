// Import mongoose
const mongoose = require('mongoose');

// schema for the animals
const animalSchema = new mongoose.Schema({
  zoo: {
    type: String,
    required: true
  },
  scientificName: {
    type: String,
    required: true
  },
  commonName: {
    type: String,
    required: true
  },
  givenName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isTransportable: {
    type: Boolean,
    required: true
  }
});

// for exporting the schema
module.exports = mongoose.model('Animal', animalSchema);
