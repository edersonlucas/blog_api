const express = require('express');

const Router = express.Router();
const postController = require('../controllers/post.controller');
const newPostValidationMiddleware = require('../middlewares/newPostValidation.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

Router.post('/', authMiddleware, newPostValidationMiddleware, postController.create);

module.exports = Router;