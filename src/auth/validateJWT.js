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

const validateToken = (_req, _res, next) => {
  next();
};

module.exports = {
  createToken,
  validateToken,
};
