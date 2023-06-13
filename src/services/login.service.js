const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const login = async ({ email, password }) => {
  const userLogin = await User.findOne({
    where: { email, password },
  });

  if (!userLogin) {
    return { message: 'Error' };
  }
  const token = generateToken(userLogin.dataValues);
  return { token };
};

module.exports = { login };
