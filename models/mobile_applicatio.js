 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mobile_appliaction =  new Schema({
    name: String,
    os: String, 
    programming_language: String,
    type: String,
    multi_platform: String
})

module.exports = mongoose.node('moblieApplication', mobile_application);