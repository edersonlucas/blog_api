const express = require('express');

const Router = express.Router();
const categoryController = require('../controllers/category.controller');
const newCategoryValidationMiddleware = require('../middlewares/newCategoryValidation.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

Router.post('/', authMiddleware, newCategoryValidationMiddleware, categoryController.create);
Router.get('/', authMiddleware, categoryController.getAll);

module.exports = Router;