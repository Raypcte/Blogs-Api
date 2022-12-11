const services = require('../services/services.login');

const getAll = async (_req, res) => {
  try {
    const users = await services.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Ocorreu um erro no getAllController',
    });
  }
};

const enter = async (req, res) => {
  try {
    const { token } = req;
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Ocorreu um erro no enterController',
    });
  }
};

module.exports = {
  getAll,
  enter,
};
