const postService = require('../services/post.service');
const errorMap = require('../util/errorMap');

const create = async (req, res) => {
  const { id } = req.user;
  const { type, message } = await postService.insert(id, req.body);
  if (type) return res.status(errorMap(type)).json({ message }); 
  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
  const posts = await postService.getAll();
  return res.status(200).json(posts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getById(id);
  if (post) return res.status(200).json(post);
  return res.status(404).json({ message: 'Post does not exist' });
};

module.exports = {
  create,
  getAll,
  getById,
};