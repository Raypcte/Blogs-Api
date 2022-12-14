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
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.userId = decoded.data.userId;

    if (decoded) {
      req.decodedToken = decoded;
    }

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};

module.exports = {
  createToken,
  validateToken,
};
