const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
});

const newUserSchema = Joi.object({
  displayName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  image: Joi.optional(),
});

module.exports = {
  loginSchema,
  newUserSchema,
};