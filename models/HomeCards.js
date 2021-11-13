const mongoose = require('mongoose');


const HomeCardsSchema = new mongoose.Schema({
  img: {
    type: String,
    required: [true, 'Please add a img'],

  },

  title: {

    type: String,
    required: true
  },

  info: {

    type: String,
    required: true
  }




})


module.exports = mongoose.models.HomeCards || mongoose.model('HomeCards'
  , HomeCardsSchema);