const express = require('express');
const auth = require('../routes/auth')
const token = require('../routes/token')

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/auth', auth);
    app.use('/api/token', token);
}