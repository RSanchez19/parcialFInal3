 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mobile_application=  new Schema({
    name: String,
    os: String, 
    programming_language: String,
    type: String,
    multi_platform: String
})

module.exports = mongoose.model('aplicaciones_moviles', mobile_application);