const User = require('../../model/UserModel');

module.exports = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log('LOGIN Request');
    console.log('Username : ' + username);
    console.log('Password : ' + password);

    // Checks for session
    if (req.session) {
        console.log('SESSION EXISTS. Logging...');
        console.log(req.session);
    }
    
    User.findOne({ username : username }, (err, userRes) => {
        if (err) {
            console.log('SOMETHING IS WRONG ON LOGIN : ', err);
            return res.redirect('/login');
        }
        if (userRes) {
            console.log('USER FOUND. CHECKING PASSWORD');
            if (userRes.password == password) {
                console.log('PASSWORD MATCH! LOGGING IN...');
                req.session.username = userRes.username;
                res.redirect('/');
            } else {
                console.log('PASSWORD MISMATCH! REDIRECTING TO LOGIN PAGE');
                res.redirect('/login');
            }
        } else {
            console.log('USER NOT FOUND. REDIRECTING TO LOGIN PAGE');
            res.redirect('/login');
        }
    })

}