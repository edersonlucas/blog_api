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

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });
  if (post) return { type: null, message: post };
  return { type: 'NOT_FOUND', message: 'Post does not exist' };
};

const updateById = async (postId, userId, { title, content }) => {
  const findPost = await BlogPost.findOne({
    where: { id: postId, title, content, userId },
    raw: true,
  });
  if (findPost) return { type: 'CONFLICT', message: 'No change detected' };
  const [postHasBeenUpdated] = await BlogPost.update({ title, content, updated: new Date() }, {
    where: { id: postId, userId },
  });
  if (postHasBeenUpdated) {
    const updatedPost = await getById(postId);
    return updatedPost;
  }
  return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
};

const removeById = async (postId, userId) => {
  const { type } = await getById(postId); // verifica se o post existe
  if (type) return { type: 'NOT_FOUND', message: 'Post does not exist' };
  const postHasBeenRemoved = await BlogPost.destroy({
    where: { id: postId, userId },
  });
  if (postHasBeenRemoved) return { type: null, message: '' };
  return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
};

module.exports = {
  insert,
  getAll,
  getById,
  updateById,
  removeById,
};