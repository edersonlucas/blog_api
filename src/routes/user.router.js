const express = require('express');

const Router = express.Router();
const newUserValidationMiddleware = require('../middlewares/newUserValidation.middleware');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

Router.post('/', newUserValidationMiddleware, userController.create);
Router.get('/', authMiddleware, userController.getAll);
Router.get('/:id', authMiddleware, userController.getById);
Router.delete('/me', authMiddleware, userController.deleteMyUser);

module.exports = Router;