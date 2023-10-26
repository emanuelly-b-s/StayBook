const mongoose = require('mongoose');

const Bedroom = mongoose.model('Bedroom', {
    capacity: Number,
    category: [],
    numberBeds: {
        doubleBed: Number,
        singleBed: Number
    },
    kitchen: Boolean,
    wifi: [], //area comum, quarto
    washer: Boolean,
    dryer: Boolean,
    hotel: String,
    moreInformations: String
});

module.exports = Bedroom;