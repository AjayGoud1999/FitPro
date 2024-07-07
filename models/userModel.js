const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, reqired: true },
}); 
module.exports = mongoose.model('User', exerciseSchema);

