const { authenticateToken } = require('../utils/JWT');

const authenticateMiddlewares = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const user = await authenticateToken(token);

  if (!user) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

module.exports = authenticateMiddlewares;
