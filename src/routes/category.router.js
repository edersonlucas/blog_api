const express = require('express');

const Router = express.Router();
const categoryController = require('../controllers/category.controller');
const newCategoryMiddlware = require('../middlewares/newCategory.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

Router.post('/', authMiddleware, newCategoryMiddlware, categoryController.create);

module.exports = Router;