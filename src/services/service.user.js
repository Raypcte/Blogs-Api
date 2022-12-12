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

const createUser = async (infoUser) => {
  const newUser = await User.create(infoUser);

  return newUser;
};

const getUserById = async (id) => {
  const userResult = await User.findByPk(id);

  return userResult;
};

module.exports = {
  getAll,
  getOne,
  createUser,
  getUserById,
};
