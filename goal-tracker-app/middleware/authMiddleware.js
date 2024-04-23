const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: 'Unauthorized' });
    }
};
