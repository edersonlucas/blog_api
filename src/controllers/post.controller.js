const postService = require('../services/post.service');
const errorMap = require('../util/errorMap');

const create = async (req, res) => {
  const { id } = req.user;
  const { type, message } = await postService.insert(id, req.body);
  if (type) return res.status(errorMap(type)).json({ message }); 
  return res.status(201).json(message);
};

module.exports = {
  create,
};