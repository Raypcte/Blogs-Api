require('dotenv/config');
const jwt = require('jsonwebtoken');
const service = require('../services/services.login');

const secret = process.env.JWT_SECRET || '123';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = async (req, res, next) => {
  const { email, password } = req.body;
  
  const user = await service.getOne({ email, password });
  console.log(user, 'usuário encontrado');
  if (!user) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  if (token) {
    req.token = token;
  }

  next();
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
