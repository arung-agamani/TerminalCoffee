const path = require('path');

module.exports = (req, res) => {
    res.sendFile(path.resolve('./views/tambahMenu.html'));
}