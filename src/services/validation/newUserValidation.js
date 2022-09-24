const { newUserSchema } = require('./schema');

module.exports = (payload) => {
  const { error } = newUserSchema
    .validate(payload);
  if (error) return { type: 'BAD_REQUEST', message: error.message };
  return { type: null, message: '' };
};