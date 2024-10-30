// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/users', authMiddleware, userController.getAllUsers);
router.get('/users/:id', authMiddleware, userController.getUserById);

module.exports = router;
