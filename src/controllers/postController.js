const { Post } = require('../models/associations');

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, userId: req.user.id });
  res.status(201).json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
};
