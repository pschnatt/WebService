// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createbook, getBook, deleteBook } = require('../controllers/bookingController');


router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);


router.post('/createBook', createbook);
router.get('/getBook', getBook);
router.delete('/deleteBook', deleteBook);

module.exports = router;