const express = require('express');
const CategoryController = require('../controllers/category.controllers');
const { validateName } = require('../middlewares/category.middlewares');
const authenticate = require('../middlewares/auth.middlewares');

const categoryRoute = express.Router();

categoryRoute.get('/', authenticate, CategoryController.getAll);

categoryRoute.post(
  '/',
  authenticate,
  validateName,
  CategoryController.createCategory,
);

module.exports = categoryRoute;
