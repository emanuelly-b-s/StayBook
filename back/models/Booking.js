const mongoose = require('mongoose');

const Booking = mongoose.model('Booking', {

    period: {
        startDate: Date,
        end_date: Date
    },
    user: {
        name: String,
        phone_number: String,
        cpf: String,
        date_birth: Date,
        email: String
    },
    payment: {
        booking_amount: Number,
        form_payment: String,
    },
    dependents: {
        numberChildren: Number,
        numberAdults: Number
    }

});

module.exports = Booking;