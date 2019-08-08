var express = require('express');

const App = express();

App.get('/', function (req, res) {
    res.send('AAAAAAAAAAAAAAA');
    console.log('GET request happened');
});

App.listen(8000, function () {
    console.log('Server udah jalan gan');
});