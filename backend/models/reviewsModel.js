const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requires: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'reviews',
  }
);

const Review = mongoose.model('Review', reviewsSchema);

module.exports = Review;
