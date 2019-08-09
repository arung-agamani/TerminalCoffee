const path = require('path');

module.exports = (req, res) => {
    if (req.session.username) {
        res.sendFile(path.resolve('./views/index-logged.html'));
    } else {
        res.sendFile(path.resolve('./views/landing.html'));
    }    
}