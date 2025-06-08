const express = require('express');

const reviewsController = require('../controllers/reviewsController');

const router = express.Router();

router.get('/', reviewsController.getReviews);

router.post('/', reviewsController.createReview);

module.exports = router;
