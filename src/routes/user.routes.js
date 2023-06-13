const express = require('express');
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

module.exports = userRoute;
