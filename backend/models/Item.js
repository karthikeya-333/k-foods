const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    type:{
        type : String,
        required :true
    },
    price:{
        type: Number,
        required : true
    },
    quantity:{
        type:Number,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

module.exports = mongoose.model('items', ItemSchema);