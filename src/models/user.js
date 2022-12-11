const userModel = (sequelize, modelUser) => {
  const User = sequelize.define('User', {
    id: {
      type: modelUser.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName:{
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
  }, {
    timestamps: false,
    underscored: true,
  });
  return User;
};

module.exports = userModel;
