const mongoose = require('mongoose');

const Room = mongoose.model('Room', {
    capacity: Number,
    doubleBed: Number,
    singleBed: Number,
    price: Number,
    rate: Number,
    hotel: String,
    description: String,
    category: {
        type:[String],
        required: true
    },
    image: {
        type:[String],
        required: true
    },
    available: Boolean
});

module.exports = Room;