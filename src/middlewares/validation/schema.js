const Joi = require('joi');

const emailSchema = Joi.string().min(1).required();
const passwordSchema = Joi.string().min(1).required();

const loginSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});

module.exports = {
  loginSchema,
};