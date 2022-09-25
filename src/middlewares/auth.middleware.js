const auth = require('../util/auth');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const user = auth.authorization(authorization);
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};