const Review = require('../models/reviewsModel');

// all
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// create
exports.createReview = async (req, res) => {
  try {
    const { name, rating, comment } = req.body;

    // 1st validation
    if (!name || !rating || !comment) {
      return res.status(400).json({ error: 'Please fill in all fields' });
    }
    // 2nd validation
    if (rating < 1 || rating > 10) {
      return res.status(400).json({ error: 'Rating must be between 1 and 10' });
    }

    const newReview = new Review({ name, rating, comment });
    await newReview.save();
    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating review' });
  }
};
