const Restaurant = require('../models/restaurant');

const createRestaurant = async (req, res) => {
    try {
      const { name, address, phoneNumber, totalSeats, rating, startingPrice} = req.body;

      const newRestaurant = await Restaurant.create({
        name,
        address,
        phoneNumber,
        totalSeats,
        rating,
        startingPrice
      });
  
      return res.json(newRestaurant);
    } catch (error) {
      console.error('Error creating restaurant:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const getRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.find().sort({ createdAt: -1 });
    res.status(200).json(restaurant);
  } catch (error) {
    console.error('Error getting restaurants:', error);
    res.status(500).send('Internal Server Error');
  }
};


const getRestaurantFromId = async (req, res) => {
  try {
    const {restaurantId} = req.body;
    const restaurant = await Restaurant.findOne({restaurantId})
    res.status(200).json(restaurant);
  } catch (error) {
    console.error('Error getting restaurant:', error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { createRestaurant, getRestaurant, getRestaurantFromId };
