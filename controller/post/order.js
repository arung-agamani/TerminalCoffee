const Queue = require('../../model/QueueModel');

module.exports = (req, res) => {
    const OrderArray = new Array();
    const itemArray = new Array();
    const amountArray = new Array();
    
    for (var prop in req.body) {
        if (prop.match(/item/)) {
            itemArray.push(req.body[prop]);
        } else {
            amountArray.push(req.body[prop]);
        }
    }

    for (let i = 0; i < itemArray.length; i++) {
        let obj = {
            name : itemArray[i],
            amount : amountArray[i],
        };
        OrderArray.push(obj);
    }
    Queue.create({
        username : req.session.username,
        order : OrderArray,
    }, (err, queueRes) => {
        if (err) {
            console.log('Error occured when pushing queue order : ', err);
            return res.redirect('/order');
        }
        console.log('Successfully adding new order!');
        res.redirect('/');
    });
}