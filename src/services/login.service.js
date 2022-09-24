const { User } = require('../models');
const auth = require('../util/auth');

const userExist = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    raw: true,
  });
  if (user) {
    const payload = {
      id: user.id,
      email: user.email,
      displayName: user.displayName,
      image: user.image,
    };
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