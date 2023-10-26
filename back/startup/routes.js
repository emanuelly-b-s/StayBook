const express = require('express');
const auth = require('../routes/auth');
const bedroom = require('../routes/beedrom');
const token = require('../routes/token');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/auth', auth);
    app.use('/api/token', token);
    app.use('/api/bedroom', bedroom);
}