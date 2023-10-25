const mongoose = require('mongoose');
 
const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
    validated: Boolean
})
 
module.exports = User;