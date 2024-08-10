const Booking = require('../models/booking');

const createbook = async (req, res) => {
  try {
    const { userId, restaurantId, tableNumber, seats, date, specialReq, paymentMethod, status } = req.body;

    // Check if it is already reserved for the given date
    const dateExist = await Booking.findOne({ restaurantId, tableNumber, date });
    if (dateExist) {
      return res.status(400).json({
        error: "Already reserved for the given date",
      });
    }

    // Check if the date is in the past
    if (new Date(date) < new Date(now.getTime() + 30 * 60000)) {
      return res.status(400).json({
        error: "The booking must be atleast 30 minutes in advance",
      });
    }

    const newBook = await Booking.create({
      userId, 
      restaurantId, 
      tableNumber, 
      seats, 
      date, 
      specialReq, 
      paymentMethod, 
      status
    });

    return res.status(201).json(newBook);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getBook = async (req, res) => {
  try {
    const {uuserId, ubookingId} = req.body;
    const book = await Booking.find({userId: uuserId, bookingId: ubookingId});
    res.status(200).json(book);
  } catch (error) {
    console.error('Error getting book:', error);
    res.status(500).send('Internal Server Error');
  }
};

const deleteBook = async (req, res) => {
  try {
    const {uuserId, ubookingId} = req.body;

    // Find the booking by id and username
    const booking = await Booking.findOne({userId: uuserId, bookingId: ubookingId});

    if (!booking) {
      return res.status(404).json({
        error: 'Booking not found or unauthorized to delete',
      });
    }

    // Delete the booking
    await Booking.findOneAndDelete({userId: uuserId, bookingId: ubookingId});

    return res.status(204).send(); // 204 No Content - Successful deletion
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createbook, getBook, deleteBook };