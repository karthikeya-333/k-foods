const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors') ;
const path = require("path");
// env=require('dotenv');
// env.config();
console.log(process.env.DATA_BASE)

connectToMongo();
const app = express()
const port = 5000 || process.env.PORT;

app.use(express.json());
app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/items', require('./routes/items'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));

// app.use(express.static(path.join(__dirname,'../build')));

// app.get("*",function(req,res){
//   res.sendFile(path.join(__dirname,'../build/index.html'))
// });



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})