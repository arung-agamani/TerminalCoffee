const path = require('path');
const Menu = require('../../model/MenuModel');

module.exports = (req, res) => {
    Menu.find({}, (err, menuRes) => {
        if (err) {
            console.log('Something went wrong');
            return res.send('Something went wrong. Wait for a moment');
        }
        const menuList = menuRes;
        res.render('./order', { menuList });
    })
    
}