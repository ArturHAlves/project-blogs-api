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

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserService.getByID(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

module.exports = { createUser, getAll, getById };
