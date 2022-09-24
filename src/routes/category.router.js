const express = require('express');

const Router = express.Router();
const categoryController = require('../controllers/category.controller');
const newCategoryMiddleware = require('../middlewares/newCategory.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

Router.post('/', authMiddleware, newCategoryMiddleware, categoryController.create);
Router.get('/', authMiddleware, categoryController.getAll);

module.exports = Router;