const { User } = require('../models');
const auth = require('../util/auth');

const userExist = async (email, password) => {
  const payload = await User.findOne({
    where: { email, password },
    attributes: ['id', 'email', 'displayName', 'image'],
    raw: true,
  });
  if (payload) {
    return payload;
  }
};

const authentication = async ({ email, password }) => {
  const payload = await userExist(email, password);
  if (payload) {
    const token = auth.authentication(payload);
    return token;
  }
};

module.exports = {
  authentication,
};