const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/BookingController');

router
    .post('/', BookingController.Create)

module.exports = router;