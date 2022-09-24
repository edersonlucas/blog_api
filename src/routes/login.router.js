const express = require('express');

const Router = express.Router();
const loginValidationMiddleware = require('../middlewares/loginValidation.middleware');
const loginController = require('../controllers/login.controller');

Router.post('/', loginValidationMiddleware, loginController);

module.exports = Router;