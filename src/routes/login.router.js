const express = require('express');

const Router = express.Router();
const loginValidation = require('../middlewares/loginValidation.middleware');
const loginController = require('../controllers/login.controller');

Router.post('/', loginValidation, loginController);

module.exports = Router;