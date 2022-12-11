const express = require('express');
const login = require('../controllers/controller.login');
const { validLogin } = require('../middlewares/valid.loguin');
const { createToken } = require('../auth/validateJWT');

const loginRouter = express.Router();

loginRouter.get('/login', login.getAll);
loginRouter.post('/login', validLogin, createToken, login.enter);

module.exports = loginRouter;
