const loginService = require('../services/login.service');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const authentication = await loginService.login({ email, password });

    if (authentication.message) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json(authentication);
  } catch (error) {
    return res.status(500).json({ message: `${error.message}` });
  }
};

module.exports = { login };
