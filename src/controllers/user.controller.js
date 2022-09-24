const userService = require('../services/user.service');
const errorMap = require('../util/errorMap');

const create = async (req, res) => {
  const { type, message } = await userService.insert(req.body);
  if (type) return res.status(errorMap(type)).json({ message });
  return res.status(201).json({ token: message });
};

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  if (user) return res.status(200).json(user);
  return res.status(404).json({ message: 'User does not exist' });
};

module.exports = {
  create,
  getAll,
  getById,
};