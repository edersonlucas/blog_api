const userService = require('../services/user.service');
const errorMap = require('../util/errorMap');

module.exports = async (req, res) => {
  try {
    const { type, message } = await userService.insert(req.body);
    if (type) return res.status(errorMap(type)).json({ message });
    return res.status(201).json({ token: message });
  } catch (err) {
    return res.status(500).json({ message: 'Server error!' });
  }
};