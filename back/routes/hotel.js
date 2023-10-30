const express = require('express');
const router = express.Router();
const HotelController = require('../controllers/HotelController');

router
    .post('/', HotelController.Create)
    .post('/get', HotelController.GetAll)

module.exports = router;