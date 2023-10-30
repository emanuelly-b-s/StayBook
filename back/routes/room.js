const express = require('express');
const router = express.Router();
const RoomController = require('../controllers/RoomController');

router
    .post('/', RoomController.Create);

module.exports = router;