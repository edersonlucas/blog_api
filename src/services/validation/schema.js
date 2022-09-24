const Joi = require('joi');

const newUserSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  image: Joi.string().uri().optional(),
});

module.exports = {
  newUserSchema,
};