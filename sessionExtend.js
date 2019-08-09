module.exports = (req, res, next) => {
    if (req.session.cookie) {
        req.session.cookie.expires = new Date(Date.now() + 30000);
        req.session.cookie.maxAge = 3600000;
        console.log('Cookie expiration extended');
        console.log(req.session);
        next();
    } else {
        next();
    }
}