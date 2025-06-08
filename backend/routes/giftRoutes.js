const express = require('express');

const giftController = require('../controllers/giftController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', giftController.getGifts);

router.get('/:id', giftController.getGiftById);

router.patch('/:id', authMiddleware, giftController.updateGift);

router.post('/', authMiddleware, giftController.addNewGift);

router.delete('/:id', authMiddleware, giftController.deleteGift);

module.exports = router;
