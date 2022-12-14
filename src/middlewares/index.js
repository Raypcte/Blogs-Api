const service = require('../services/service.user');

const validLoginBody = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  return next();
};

const validLoginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await service.getOne({ email, password });

  if (!user) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  return next();
};

const validNameUser = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  return next();
};

const validEmailUser = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  return next();
};

const validPasswordUser = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  return next();
};

const validExistedUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await service.getOne({ email, password });
  console.log(user, 'verificando usuario no banco');
  if (user) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  return next();
};

const validNameCategory = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }

  return next();
};

const validPost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }

  return next();
};

module.exports = {
  validLoginBody,
  validLoginUser,
  validNameUser,
  validEmailUser,
  validPasswordUser,
  validExistedUser,
  validNameCategory,
  validPost,
};
