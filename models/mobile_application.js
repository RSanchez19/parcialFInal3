const mongoose = require('mongoose');
const {Schema} = mongoose;

const mobile_schema =  new Schema({
    app_name: {type: String, required: true},
    app_os: {type: String, required: true}, 
    app_language:  {type: String, required: true},
    app_type: {type: String, required: true},
    app_multi_plattform: {type: String, required: true}
}); 

module.exports = mongoose.model('mobile_app', mobile_schema); 