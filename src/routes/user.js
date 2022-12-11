const express = require('express');
const login = require('../controllers/controller.user');
const mid = require('../middlewares');
const auth = require('../auth/validateJWT');

const userRouter = express.Router();

userRouter.get('/user', auth.validateToken, login.getAll);

userRouter.post(
  '/user',
  mid.validNameUser,
  mid.validEmailUser,
  mid.validPasswordUser,
  mid.validExistedUser,
  login.createUser,
);

module.exports = userRouter;
