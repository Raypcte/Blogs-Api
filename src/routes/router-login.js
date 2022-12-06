const express = require('express');
const login = require('../controllers/controller-login');
const { validLogin } = require('../middlewares/valid-loguin');

const loginRouter = express.Router();

loginRouter.post('/login', validLogin, login.enter);

module.exports = loginRouter;