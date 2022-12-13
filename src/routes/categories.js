const express = require('express');
const category = require('../controllers/controller.category');
const mid = require('../middlewares');
const auth = require('../auth/validateJWT');

const categoryRouter = express.Router();

categoryRouter.get('/categories', auth.validateToken, category.getAll);

// categoryRouter.get('/user/:id', auth.validateToken, login.getUserById);

categoryRouter.post(
  '/categories',
  auth.validateToken,
  mid.validNameCategory,
  category.createCategory,
);

module.exports = categoryRouter;
