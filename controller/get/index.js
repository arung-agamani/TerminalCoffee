module.exports = (req, res) => {
    res.sendfile(__dirname + '../../views/index.html');
}