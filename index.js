const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const dataFormat = require('./models/dataFormat');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 80;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true})); 

// DATABASE
mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connected");
});

app.get('/', async (req, res) => {

    let sampleData = await dataFormat.find();
    // console.log(sampleData);
    return res.status(200).json(sampleData);
});

app.get('/data', async (req, res) => {
    
    console.log(req.query);
    let data;
    const req_value = parseInt(req.query.value);
    // data = await dataFormat.find({value: req_value});

    const fetchData = async () => {
        if(req.query.operator === '<') {
            data = await dataFormat.find({
                $and: [
                    {
                        char: req.query.alphabet
                    },
                    {
                        value: {
                            $lt: req_value
                        }
                    }
                ]
            });
        }
        else {
            data = await dataFormat.find({
                $and: [
                    {
                        char: req.query.alphabet
                    }, 
                    {
                        value: {
                            $gt: req_value
                        }
                    }
                ]
            });
        }
    }

    await fetchData();
    console.log(data);

    return res.status(200).json(data);
});

// Listening Port
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});