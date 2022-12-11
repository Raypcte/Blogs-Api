module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    sequelize,
    underscored: true,
    timestamps: false,
  });
  return user;
}