module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'categories'
  });
  return Category;
}
