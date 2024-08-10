const mongoose = require('mongoose')
const {Schema} = mongoose

const bookingHistorySchema = new Schema({
  restaurantid : Number,
  restaurantname : String,
  seat: Number,
  price: Number,
  date : Date,
  status : String
})

const profileSchema = new Schema({
  username: String,
  id : Number,
  history : [bookingHistorySchema] 
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;