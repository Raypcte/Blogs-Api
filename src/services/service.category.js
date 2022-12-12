const { Category } = require('../models');

const createCategory = async (infoCategory) => {
  const newCategory = await Category.create(infoCategory);

  return newCategory;
};

module.exports = {
  createCategory, 
};