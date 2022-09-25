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
  const { type, message } = await postService.getById(id);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(200).json(message);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const { type, message } = await postService.updateById(id, userId, req.body);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(200).json(message);
};

const removeById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const { type, message } = await postService.removeById(id, userId);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(204).json();
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  removeById,
};