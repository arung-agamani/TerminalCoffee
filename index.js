/**
 * Terminal Coffee
 * by C#
 */


// Package Load
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
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

// GET Controller Declaration
const GET_indexController = require('./controller/get/index');
const GET_loginController = require('./controller/get/login');
const GET_registerController = require('./controller/get/register');
const GET_logoutController = require('./controller/get/logout');
const GET_orderController = require('./controller/get/order');
const GET_tambahMenuController = require('./controller/get/tambahMenu');
const GET_terkonfirmasiController = require('./controller/get/terkonfirmasi');

// POST Controller Declaration
const POST_loginController = require('./controller/post/login');
const POST_registerController = require('./controller/post/register');
const POST_tambahMenuController = require('./controller/post/tambahMenu');
const POST_orderMenuController = require('./controller/post/order');

// Middlewares
const sessionExtender = require('./sessionExtend');


// App Set
app.set('views', './views');
app.set('view engine', 'ejs');

// App Use
app.use(express.static('./views'));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(expressSession({
    secret : 'awoo 5 6 7 O 9',
    cookie : {
        maxAge : 600000,
    }
}));

// GET Controller
app.get('/', sessionExtender, GET_indexController);
app.get('/login', GET_loginController);
app.get('/register', GET_registerController);
app.get('/logout', GET_logoutController);
app.get('/order', GET_orderController);
app.get('/tambahMenu', GET_tambahMenuController);
app.get('/terkonfirmasi', GET_terkonfirmasiController);

// POST Controller
app.post('/login', POST_loginController);
app.post('/register', POST_registerController);
app.post('/tambahMenu', POST_tambahMenuController);
app.post('/order', POST_orderMenuController);

// Server stuffs
app.listen(process.env.PORT || 4000, () => {
    console.log('Server udah jalan gan');
})
