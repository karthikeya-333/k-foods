const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DATA_BASE;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;