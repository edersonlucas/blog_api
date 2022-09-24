const express = require('express');

const Router = express.Router();
const newUserValidationMiddleware = require('../middlewares/newUserValidation.middleware');
const userController = require('../controllers/user.controller');

Router.post('/', newUserValidationMiddleware, userController);

module.exports = Router;