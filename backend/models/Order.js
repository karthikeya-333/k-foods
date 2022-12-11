const mongoose = require('mongoose');
const { Schema } = mongoose;

// const timeElapsed = Date.now();
const today = new Date();
todayDate =String(today.getDate()) +"/"+ String(today.getMonth()+1) +"/"+ String(today.getFullYear())

const OrderSchema = new Schema({
    orders:{
        type : Array,
        required : true
    },
    address:{
        type:String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date:{
        type: String,
        default: todayDate
    },
    status:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('orders', OrderSchema);