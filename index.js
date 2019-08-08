/**
 * Terminal Coffee
 * by C#
 */

// Package Load
const express = require('express');

// Package Usage
const app = express();

// Controller Declaration
const GET_indexController = require('./controller/get/index');
const GET_loginController = require('./controller/get/login');
const GET_registerController = require('./controller/get/register');

// GET Controller
app.get('/', GET_indexController);
app.get('/login', GET_loginController);
app.get('/register', GET_registerController);


// POST Controller

// Server stuffs
app.listen(4000, () => {
    console.log('Server udah jalan gan');
})
