const { newCategorySchema } = require('./validation/schema');

module.exports = (req, res, next) => {
  const { error } = newCategorySchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  return next();
};