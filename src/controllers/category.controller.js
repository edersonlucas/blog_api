const categoryService = require('../services/category.service');

const create = async (req, res) => {
  const category = await categoryService.insert(req.body);
  return res.status(201).json(category);
};

const getAll = async (_req, res) => {
  const categories = await categoryService.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};