const { BlogPost, User, Category, PostCategory } = require('../models');

const categoriesExist = async (categoryIds) => {
  const result = await Promise.all(
    categoryIds.map(async (categoryId) => {
      const category = await Category.findOne({ 
        where: { id: categoryId },
        raw: true, 
      });
      if (category) return category.id;
    }),
  );
  const filteredResult = result.filter((categoryId) => categoryId);
  return filteredResult;
};

const insert = async (userId, post) => {
  const { categoryIds, title, content } = post;
  const existingCategories = await categoriesExist(categoryIds);
  if (existingCategories.length < 1) { 
    return { type: 'BAD_REQUEST', message: '"categoryIds" not found' }; 
  }
  const newPost = await BlogPost.create({ 
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(), 
  });
  existingCategories.forEach(async (categoryId) => {
    await PostCategory.create({ postId: newPost.id, categoryId });
  });
  return { type: null, message: newPost };
};

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

module.exports = {
  insert,
  getAll,
};