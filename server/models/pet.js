'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true,
    enum: ['dog', 'cat']
  },
  picture: String,
  position: {
    lat: {
      type: Number
    },
    lng: {
      type: Number
    }
  }
});

const Pet = mongoose.model('Pet', schema);

module.exports = Pet;
