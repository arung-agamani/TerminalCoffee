const Menu = require('../../model/MenuModel');

module.exports = (req, res) => {
    Menu.create(req.body, (err, menuRes) => {
        if (err) {
            console.log('Something went wrong :', err);
            return res.redirect('/tambahMenu');
        }
        console.log('Menu telah sukses ditambahkan!');
        console.log(req.body);
        console.log('Redirecting...');
        return res.redirect('/');
    })
}