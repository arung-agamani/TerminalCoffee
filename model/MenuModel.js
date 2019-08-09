const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
    },
    price : {
        type : Number,
        required : true,
    },
    stock : {
        type : Number,
        required : true,
        default : 10,
    }
});

const Menu = mongoose.model('appMenu', FoodSchema);

module.exports = Menu;