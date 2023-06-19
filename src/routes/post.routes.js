const express = require('express');

const postController = require('../controllers/post.controllers');
const authenticate = require('../middlewares/auth.middlewares');
const { validateFieldsCreate, validateFieldsUpdate } = require('../middlewares/post.middlewares');

const postRoute = express.Router();

postRoute.get('/', authenticate, postController.getAll);

postRoute.get('/:id', authenticate, postController.getById);

postRoute.post('/', authenticate, validateFieldsCreate, postController.createPost);

postRoute.put('/:id', authenticate, validateFieldsUpdate, postController.updatePost);

module.exports = postRoute;
