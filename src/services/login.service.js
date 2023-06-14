const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async ({ email, password }) => {
  const userLogin = await User.findOne({
    where: { email, password },
  });

  if (!userLogin) {
    const error = new Error('Invalid fields');
    error.status = 400;
    throw error;
  }
  const token = generateToken(userLogin.dataValues);
  return { token };
};

module.exports = { login };
