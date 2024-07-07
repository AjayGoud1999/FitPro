const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = Schema({
    bodyPart: { type: String, required: true },
    equipment: { type: String, required: true },
    gifUrl: { type: String, reqired: true },
    name: { type: String, required: true },
    target: { type: String, required: true }
}); 
module.exports = mongoose.model('Exercise', exerciseSchema);

