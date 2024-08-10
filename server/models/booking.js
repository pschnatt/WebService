const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const BookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    default : uuidv4,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  restaurantId: {
    type: String,
    required: true,
  },
  date: { 
    type: Date,
    required: true,
  },
  tableNumber : Number,
  seats : Number,
  specialReq : String,
  paymentMethod : {
    type : String,
    required: true
  },
  status : {
    type : String,
    required: true
  }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
