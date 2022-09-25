const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true, 
    tableName: 'categories'
  })

  Category.associate = (models) => {
    Category.hasOne(models.PostCategory, { foreignKey: 'id', as: 'categories'} )
  }

  return Category;
}

module.exports = CategoryModel;