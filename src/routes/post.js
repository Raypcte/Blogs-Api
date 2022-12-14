const express = require('express');
const post = require('../controllers/controller.post');
const mid = require('../middlewares');
const auth = require('../auth/validateJWT');

const postRouter = express.Router();

// postRouter.get('/categories', auth.validateToken, post.getAll);

// postRouter.get('/user/:id', auth.validateToken, login.getUserById);

postRouter.post(
  '/post',
  auth.validateToken,
  mid.validPost,
  post.createPost,
);

module.exports = postRouter;
