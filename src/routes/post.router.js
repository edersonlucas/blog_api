const express = require('express');

const Router = express.Router();
const postController = require('../controllers/post.controller');
const newPostValidationMiddleware = require('../middlewares/newPostValidation.middleware');
const updatePostValidationMiddleware = require('../middlewares/updatePostValidation.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

Router.post('/', authMiddleware, newPostValidationMiddleware, postController.create);
Router.get('/', authMiddleware, postController.getAll);
Router.get('/:id', authMiddleware, postController.getById);
Router.put('/:id', authMiddleware, updatePostValidationMiddleware, postController.updateById);

module.exports = Router;