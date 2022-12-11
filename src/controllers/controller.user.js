const services = require('../services/service.user');
const { createToken } = require('../auth/validateJWT');

const getAll = async (_req, res) => {
  try {
    const users = await services.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Ocorreu um erro no getAll do Controller',
    });
  }
};

const enter = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await services.getOne({ email, password });
    const token = createToken(user);
    req.token = token;
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Ocorreu um erro no enter do Controller',
    });
  }
};

const createUser = async (req, res) => {
  try {
    const infoUser = req.body;
    const newUser = await services.createUser(infoUser);
    const token = createToken(newUser);
    req.token = token;
    res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Ocorreu um erro no createUser do Controller',
    });
  }
};

module.exports = {
  getAll,
  enter,
  createUser,
};
