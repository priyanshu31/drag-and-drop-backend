const mongoose = require('mongoose');

const dataFormat = new mongoose.Schema({
    char: {
        type: String
    },  
    value: {
        type: String
    },    
});

module.exports = mongoose.model("dataFormat" , dataFormat);