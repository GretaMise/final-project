const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    theme: {
      type: [String],
      required: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    collection: 'gifts',
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Gift', giftSchema);
