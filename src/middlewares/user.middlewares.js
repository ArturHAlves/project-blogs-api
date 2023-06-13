const { User } = require('../models');

const validateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  return next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  return next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  return next();
};

const validateUserRegistered = async (req, res, next) => {
  const { email } = req.body;

  const users = await User.findAll();

  const hasEmail = users.some(({ dataValues }) => dataValues.email === email);

  if (hasEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUserRegistered,
};
