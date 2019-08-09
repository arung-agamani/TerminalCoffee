const Queue = require('../../model/QueueModel');

module.exports = (req, res) => {
    Queue.create({
        username : req.session.username,
        order : req.orderPesanan,
    }, (err, queueRes) => {
        if (err) {
            console.log('Error occured when pushing queue order : ', err);
            return res.redirect('/order');
        }
        console.log('Successfully adding new order!');
        res.render('terkonfirmasi');
    });
}