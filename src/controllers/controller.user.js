const services = require('../services/service.user');
const { createToken } = require('../auth/validateJWT');

const getAll = async (_req, res) => {
  try {
    const users = await services.getAll();
    const usersWithoutPassword = users.map(
      ({ id, displayName, email, image }) => ({
        id,
        displayName,
        email,
        image,
      }),
    );
    return res.status(200).json(usersWithoutPassword);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Ocorreu um erro no getAll do Controller',
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id: idUser } = req.params;
    const { id, displayName, email, image } = await services.getUserById(idUser);
    return res.status(200).json({ id, displayName, email, image });
  } catch (e) {
    console.log(e.message);
    res.status(404).json({
      message: 'User does not exist',
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
  getUserById,
};
