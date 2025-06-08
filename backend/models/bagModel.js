const mongoose = require('mongoose');

const bagSchema = new mongoose.Schema(
  {
    giftId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gift',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'bags',
  }
);

const Bag = mongoose.model('Bag', bagSchema);

module.exports = Bag;
