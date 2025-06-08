const express = require('express');
const router = express.Router();
const bagController = require('../controllers/bagController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, bagController.createBag);
router.get('/', authMiddleware, bagController.getUserBag);
router.delete('/:id', authMiddleware, bagController.deleteBag);
router.get('/all', authMiddleware, bagController.getAllBags);

module.exports = router;
