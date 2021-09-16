const mongoose = require('mongoose');

const dataFormat = new mongoose.Schema({
    char: {
        type: String
    },  
    value: {
        type: Number
    },    
});

module.exports = mongoose.model("dataFormat" , dataFormat);