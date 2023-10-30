const mongoose = require('mongoose');
const Room = require('./Room');

const Booking = mongoose.model('Booking', {    
    startDate: Date,
    endDate: Date,
    user: String,
    numberChildren: Number,
    numberAdults: Number,
    rooms: {
        type:[String],
        required: true
    }
});

module.exports = Booking;