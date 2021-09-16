const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const dataFormat = require('./models/dataFormat');

const app = express();
const port = process.env.PORT || 80;

app.use(express.json())
app.use(express.urlencoded({extended: true})); 

// DATABASE
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connected");
});

app.get('/', async (req, res) => {
    
    // let data = new dataFormat({char: 'A', value: '85'});
    // let data = new dataFormat({char: 'A', value: '76'});
    // let data = new dataFormat({char: 'A', value: '30'});
    // let data = new dataFormat({char: 'A', value: '60'});
    // let data = new dataFormat({char: 'B', value: '40'});
    // let data = new dataFormat({char: 'B', value: '90'});
    // let data = new dataFormat({char: 'B', value: '50'});
    // let data = new dataFormat({char: 'B', value: '20'});
    // let data = new dataFormat({char: 'C', value: '20'});
    // let data = new dataFormat({char: 'C', value: '80'});
    // let data = new dataFormat({char: 'C', value: '10'});
    // let data = new dataFormat({char: 'D', value: '60'});
    // let data = new dataFormat({char: 'D', value: '30'});
    // let data = new dataFormat({char: 'D', value: '30'});
    // let data = new dataFormat({char: 'D', value: '25'});
    // let data = new dataFormat({char: 'D', value: '40'});
    // let data = new dataFormat({char: 'E', value: '90'});
    // let data = new dataFormat({char: 'E', value: '10'});
    // let data = new dataFormat({char: 'F', value: '80'});
    // let data = new dataFormat({char: 'G', value: '10'});
    // let data = new dataFormat({char: 'G', value: '90'});
    // let data = new dataFormat({char: 'G', value: '80'});
    // let data = new dataFormat({char: 'G', value: '30'});
    // let data = new dataFormat({char: 'G', value: '50'});
    // let data = new dataFormat({char: 'H', value: '50'});
    // let data = new dataFormat({char: 'H', value: '70'});
    // let data = new dataFormat({char: 'H', value: '40'});
    // let data = new dataFormat({char: 'I', value: '10'});
    // let data = new dataFormat({char: 'I', value: '20'});
    // let data = new dataFormat({char: 'I', value: '70'});
    // let data = new dataFormat({char: 'I', value: '90'});
    // let data = new dataFormat({char: 'J', value: '80'});
    // let data = new dataFormat({char: 'J', value: '70'});
    // let data = new dataFormat({char: 'J', value: '20'});
    // let data = new dataFormat({char: 'K', value: '60'});
    // let data = new dataFormat({char: 'L', value: '80'});
    // let data = new dataFormat({char: 'L', value: '30'});
    // let data = new dataFormat({char: 'L', value: '60'});
    // let data = new dataFormat({char: 'M', value: '80'});
    // let data = new dataFormat({char: 'M', value: '90'});
    // let data = new dataFormat({char: 'N', value: '10'});
    // let data = new dataFormat({char: 'O', value: '80'});
    // let data = new dataFormat({char: 'P', value: '60'});
    // let data = new dataFormat({char: 'P', value: '40'});
    // let data = new dataFormat({char: 'P', value: '30'});
    // let data = new dataFormat({char: 'P', value: '20'});
    // let data = new dataFormat({char: 'Q', value: '50'});
    // let data = new dataFormat({char: 'Q', value: '90'});
    // let data = new dataFormat({char: 'R', value: '90'});
    // let data = new dataFormat({char: 'R', value: '30'});
    // let data = new dataFormat({char: 'S', value: '30'});
    // let data = new dataFormat({char: 'S', value: '10'});
    // let data = new dataFormat({char: 'S', value: '70'});
    // let data = new dataFormat({char: 'S', value: '90'});
    // let data = new dataFormat({char: 'S', value: '50'});
    // let data = new dataFormat({char: 'S', value: '50'});
    // let data = new dataFormat({char: 'T', value: '90'});
    // let data = new dataFormat({char: 'T', value: '10'});
    // let data = new dataFormat({char: 'U', value: '70'});
    // let data = new dataFormat({char: 'U', value: '60'});
    // let data = new dataFormat({char: 'V', value: '80'});
    // let data = new dataFormat({char: 'V', value: '80'});
    // let data = new dataFormat({char: 'V', value: '20'});
    // let data = new dataFormat({char: 'W', value: '90'});
    // let data = new dataFormat({char: 'W', value: '20'});
    // let data = new dataFormat({char: 'W', value: '30'});
    // let data = new dataFormat({char: 'W', value: '50'});
    // let data = new dataFormat({char: 'W', value: '40'});
    // let data = new dataFormat({char: 'X', value: '70'});
    // let data = new dataFormat({char: 'X', value: '75'});
    // let data = new dataFormat({char: 'Y', value: '95'});
    // let data = new dataFormat({char: 'Y', value: '70'});
    // let data = new dataFormat({char: 'Z', value: '80'});
    // let data = new dataFormat({char: 'Z', value: '60'});
    // let data = new dataFormat({char: 'Z', value: '30'});
    // data.save().then(() => console.log("saved"));

    let sampleData = await dataFormat.find();
    console.log(sampleData)
    return res.status(200).json(sampleData);
})

// Listening Port
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});