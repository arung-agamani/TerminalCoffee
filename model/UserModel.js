const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
});

const User = mongoose.model('appUser', UserSchema);

module.exports = User;