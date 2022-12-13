const { Category } = require('../models');

const createCategory = async (infoCategory) => {
  const newCategory = await Category.create(infoCategory);

  return newCategory;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory, 
  getAll,
};