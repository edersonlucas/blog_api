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

const newCategorySchema = Joi.object({
  name: Joi.string().required(),
});

const newPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  loginSchema,
  newUserSchema,
  newCategorySchema,
  newPostSchema,
  updatePostSchema,
};