const mongoose = require('mongoose');

const Booking = mongoose.model('Booking', {

    start_date: Date,
    end_date: Date,
    user: [
        {
            name: String,
            phone_number: String,
            cpf: String,
            date_birth: Date,
            email: String
        }
    ],
    payment: [
        {
            booking_amount: Number,
            form_payment: String,
        }
    ],
    dependents: [
        {
            number_children: Number,
            number_adults: Number
        }
    ]
});

module.exports = Booking;