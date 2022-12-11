const express = require('express');
const login = require('../controllers/controller.user');
const mid = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/user', login.getAll);

userRouter.post(
  '/user',
  mid.validNameUser,
  mid.validEmailUser,
  mid.validPasswordUser,
  mid.validExistedUser,
  login.createUser,
);

module.exports = userRouter;
