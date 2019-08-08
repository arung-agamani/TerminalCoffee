const User = require('../../model/UserModel');

module.exports = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username : username}, (err, userRes) => {
        if (err) {
            return res.redirect('/login');
        }
        if (userRes.password = password) {
            console.log('Logged in as ' + userRes.username);
            res.redirect('/');
        }
    })

}