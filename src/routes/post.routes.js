const express = require('express');

const postController = require('../controllers/post.controllers');
const authenticate = require('../middlewares/auth.middlewares');
const { validateFieldsPost } = require('../middlewares/post.middlewares');

const postRoute = express.Router();

postRoute.post('/', authenticate, validateFieldsPost, postController.createPost);

module.exports = postRoute;
