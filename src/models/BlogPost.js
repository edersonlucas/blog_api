const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    underscored: true, 
    tableName: 'blog_posts'
  },
  )

  BlogPost.associate = (models) => {
    BlogPost.hasOne(models.PostCategory, { foreignKey: 'id', as: 'posts' } )
    BlogPost.belongsTo(models.User, { foreignKey: 'userId' } )
  }

  return BlogPost;
}

module.exports = BlogPostModel;