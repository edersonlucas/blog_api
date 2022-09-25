const { newPostSchema } = require('./validation/schema');

module.exports = (req, res, next) => {
  const { error } = newPostSchema.validate(req.body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  return next();
};