const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    stock : {
        type : Number,
        required : true,
    }
});

const Menu = mongoose.model('appMenu', FoodSchema);

module.exports = Menu;