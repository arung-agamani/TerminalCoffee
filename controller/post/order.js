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
    req.orderPesanan = OrderArray;
    res.render('konfirmasi', { OrderArray });
}