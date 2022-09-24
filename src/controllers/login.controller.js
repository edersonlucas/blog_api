const loginService = require('../services/login.service');

module.exports = async (req, res) => {
  const token = await loginService.authentication(req.body);
  if (token) return res.status(200).json({ token });
  return res.status(400).json({ message: 'Invalid fields' });
};