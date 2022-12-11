const express = require('express');
const login = require('../controllers/controller.user');
const mid = require('../middlewares');

const loginRouter = express.Router();

loginRouter.post(
  '/login', 
  mid.validLoginBody,
  mid.validLoginUser,
  login.enter,
);

module.exports = loginRouter;
