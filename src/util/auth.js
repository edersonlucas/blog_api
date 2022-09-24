const JWT = require('jsonwebtoken');

const PRIVATE_KEY = process.env.JWT_SECRET;

const authentication = (payload) => {
  const token = JWT.sign(payload, PRIVATE_KEY);
  return token;
};

const authorization = (token) => {
  const user = JWT.verify(token, PRIVATE_KEY);
  return user;
};

module.exports = {
  authentication,
  authorization,
};