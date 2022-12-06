module.exports = (sequelize, modelUser) => {
  const User = sequelize.define('User', {
    id: {
      type: modelUser.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    display_name:{
      type: modelUser.STRING
    },
    email: {
      type: modelUser.STRING
    },
    password: {
      type: modelUser.STRING
    },
    image: {
      type: modelUser.STRING
    },
  });
  return User;
};
