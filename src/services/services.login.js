const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getOne = async ({ email, password }) => {
    const user = await User.findOne({
      // details: ['id', 'email', 'displayName'],
      where: { email, password },
    });
    return user;
};

module.exports = {
  getAll,
  getOne,
};