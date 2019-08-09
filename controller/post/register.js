const User = require('../../model/UserModel');

module.exports = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const fullName = req.body.fullName;
    const email = req.body.email

    console.log('REGISTER Request');
    
    console.log('Full Name : ' + fullName);
    console.log('Username : ' + username);    
    console.log('Email : ' + email);
    console.log('Password : ' + password);
    
    User.findOne({ username : username }, (err, userRes) => {
        if (err) {
            return res.redirect('/register');
        }
        if (userRes) {
            console.log('USER HAS ALREADY EXISTS. REDIRECTING...');
            res.redirect('/register');
        } else {
            console.log('USER BELOM ADA');
            User.create(req.body, (err, createRes) => {
                if (err) {
                    console.log('ERROR ON ADDING NEW USER');
                    return res.redirect('/register');
                }
                console.log('SUCCESSFULLY ADDED NEW USER TO THE DATABASE');
                return res.redirect('/');
            });
        }
    })

}