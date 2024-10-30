const { User, Post } = require('../models/associations');

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll({ include: Post });
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id, { include: Post });
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
};
