const services = require('../services/service.category');
// const { createToken } = require('../auth/validateJWT');

const createCategory = async (req, res) => {
  try {
    const infoCategory = req.body;
    const newCategory = await services.createCategory(infoCategory);
    res.status(201).json(newCategory);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({
      message: 'Ocorreu um erro no createCategory do Controller',
    });
  }
};

module.exports = {
  createCategory,
};