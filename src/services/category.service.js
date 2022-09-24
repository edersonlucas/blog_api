const { Category } = require('../models');

const insert = async (category) => {
  const newCategory = await Category.create(category);
  return newCategory;
};

module.exports = {
  insert,
};