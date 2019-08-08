/**
 * Terminal Coffee
 * by C#
 */


// Package Load
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Const Declaration
const mongo_url = process.env.MONGO_URL;

// Package Usage
const app = express();
mongoose.connect(mongo_url, { useNewUrlParser : true })
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch((err) => {
        console.log('Something went wrong : ', err);
    });

// Controller Declaration
const GET_indexController = require('./controller/get/index');
const GET_loginController = require('./controller/get/login');
const GET_registerController = require('./controller/get/register');

const POST_loginController = require('./controller/post/login');


// App Set
app.set('views', './views');

// App Use
app.use(express.static('./views'));

// GET Controller
app.get('/', GET_indexController);
app.get('/login', GET_loginController);
app.get('/register', GET_registerController);

// POST Controller
app.post('/login', POST_loginController);

// Server stuffs
app.listen(4000, () => {
    console.log('Server udah jalan gan');
})
