require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || '123';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const token = jwt.sign(
    { data: { userId: user.id } }, 
    secret, 
    jwtConfig,
  );

  return token;
};

const validateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    if (decoded) {
      req.decodedToken = decoded;
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  createToken,
  validateToken,
};
