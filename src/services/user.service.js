const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });

  const token = generateToken(user.dataValues);

  return { token };
};

const getAll = async () =>
  User.findAll({ attributes: { exclude: ['password'] } });

const getByID = async (id) =>
  User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

module.exports = { createUser, getAll, getByID };
