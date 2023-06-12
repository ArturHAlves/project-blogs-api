const express = require('express');
const loginControllers = require('../controllers/login.controllers');
const { validateLogin } = require('../middlewares/login.middlewares');

const loginRoute = express.Router();

loginRoute.post('/', validateLogin, loginControllers.login);

module.exports = loginRoute;
