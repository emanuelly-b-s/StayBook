const express = require('express');
const router = express.Router();

const BedroomController = require('../controllers/BedroomController');


router
    .post('/', BedroomController.Create);

module.exports = router;