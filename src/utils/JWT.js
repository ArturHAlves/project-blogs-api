const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const CONFIG_JTW = { algorithm: 'HS256' };

const generateToken = ({ id, displayName, email, image }) => {
  try {
    const sign = jwt.sign(
      { id, displayName, email, image },
      TOKEN_SECRET,
      CONFIG_JTW,
    );
    return sign;
  } catch (error) {
    console.error(`message: ${error.message}`);
  }
};

const authenticateToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, TOKEN_SECRET);
    return decoded;
  } catch (error) {
    console.error(`message: ${error.message}`);
  }
};

module.exports = { generateToken, authenticateToken };
