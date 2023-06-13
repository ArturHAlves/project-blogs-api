const UserService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const { body } = req;

    const user = await UserService.createUser(body);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

module.exports = { createUser };
