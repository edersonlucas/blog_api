const { User } = require('../models');
const newUserValidation = require('./validation/newUserValidation');
const auth = require('../util/auth');

const emailAlreadyRegistered = async (email) => {
  const user = await User.findOne({ 
    where: { email },
    raw: true,
  });
  return user;
};

const userWasCreated = async (dataNewUser) => {
  const newUser = await User.create(dataNewUser);
  if (newUser.id) {
    const payload = {
      id: newUser.id,
      email: newUser.email,
      displayName: newUser.displayName,
      image: newUser.image,
    };
    return payload;
  }
};

const insert = async (dataNewUser) => {
  const isValid = newUserValidation(dataNewUser);
  if (isValid.type) return isValid;
  const emailExist = await emailAlreadyRegistered(dataNewUser.email);
  if (emailExist) return { type: 'CONFLICT', message: 'User already registered' };
  const payload = await userWasCreated(dataNewUser);
  if (payload) {
    const token = auth.authentication(payload);
    return { type: null, message: token };
  }
};

module.exports = {
  insert,
};