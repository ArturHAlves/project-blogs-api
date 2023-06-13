const express = require('express');
const authenticate = require('../middlewares/auth.middlewares');
const UserControllers = require('../controllers/user.controllers');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUserRegistered,
} = require('../middlewares/user.middlewares');

const userRoute = express.Router();

userRoute.get('/', authenticate, UserControllers.getAll);

userRoute.get('/:id', authenticate, UserControllers.getById);

userRoute.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUserRegistered,
  UserControllers.createUser,
);

module.exports = userRoute;
