const path = require('path');

module.exports = (req, res) => {
    if (req.session.username) {
        console.log('SESSION DETECTED ON GET -> /LOGIN. REDIRECTING TO MAIN PAGE');
        console.log(req.session);
        return res.redirect('/');
    }
    res.sendFile(path.resolve('./views/login.html'));
}