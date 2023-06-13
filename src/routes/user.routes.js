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

userRoute.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUserRegistered,
  UserControllers.createUser,
);

userRoute.get('/', authenticate, UserControllers.getAll);

module.exports = userRoute;
