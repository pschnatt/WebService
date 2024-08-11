const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const RestaurantSchema = new mongoose.Schema({
  restaurantId: {
    type: String,
    default: uuidv4,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number
  },
  startingPrice: {
    type : Number
  },
  phoneNumber: Number,
  totalSeats: Number
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;