const mongoose = require('mongoose');
const Room = require('./Room');

const Hotel = mongoose.model('Hotel', {
    title: String,
    description: String,
    rate: Number,
    tags: {
        type:[String],
        required: true
    },
    rooms : {
        type:[String],
        required: false
    },      
    contact: {
        type:[String],
        required: true
    },
    image: {
        type:[String],
        required: true
    },
    location: {
        type:[String],
        required: true
    },
});

module.exports = Hotel;