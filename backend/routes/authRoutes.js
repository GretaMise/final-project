const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user', authMiddleware, authController.getCurrentUser);
router.get('/users', authMiddleware, authController.getAllUsers);
router.patch('/user', authMiddleware, authController.updateUser);
router.put(
  '/update-role/:userId',
  authMiddleware,
  authController.updateUserRole
);
router.delete(
  '/delete-user/:userId',
  authMiddleware,
  authController.deleteUser
);

module.exports = router;
