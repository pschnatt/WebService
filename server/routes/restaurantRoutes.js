const express = require('express');
const router = express.Router();
const cors = require('cors');
const { getRestaurant, createRestaurant, getRestaurantFromId } = require('../controllers/restaurantController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/getRest', getRestaurant);
router.post('/createRest', createRestaurant);
router.post('/getRestById', getRestaurantFromId)

module.exports = router;