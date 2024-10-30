// routes/postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/posts', authMiddleware, postController.createPost);
router.get('/posts', authMiddleware, postController.getAllPosts);

module.exports = router;
