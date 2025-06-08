const Gift = require('../models/giftModel');
const Bag = require('../models/bagModel');

exports.createBag = async (req, res) => {
  try {
    const { giftId, quantity } = req.body;

    const userId = req.user._id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorised' });
    }

    // Validate quantity
    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: 'Quantity must be at least 1' });
    }

    const gift = await Gift.findById(giftId);
    if (!gift) {
      return res.status(404).json({ error: 'Gift not found' });
    }

    // Check if quantity exceeds available stock
    if (quantity > gift.quantity) {
      return res.status(400).json({ error: 'Quantity exceeds available stock' });
    }

    const totalPrice = gift.price * quantity;

    const bag = new Bag({
      giftId,
      userId,
      quantity,
      totalPrice,
    });

    await bag.save();

    res.status(201).json({ message: 'Successfully added to the bag' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add the gift to the bag' });
   }
 };


exports.getUserBag = async (req, res) => {
  try {
    const userId = req.user._id;
    const bags = await Bag.find({ userId })
      .populate('giftId', 'name quantity price image')
      .lean();

    const formattedBags = bags.map((bag) => ({
      ...bag,
      gift: bag.giftId,
      giftId: bag.giftId._id,
    }));

    res.status(200).json(formattedBags);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get bag' });
  }
};

// delete bag

exports.deleteBag = async (req, res) => {
  try {
    const bagId = req.params.id;
    const deletedBag = await Bag.findByIdAndDelete(bagId);

    if (!deletedBag) {
      return res.status(404).json({ message: 'Bag not found' });
    }

    res.status(200).json({ message: 'Bag deleted' });
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Server error / failed to get the bag information' });
  }
};

  
// admin only all bags

exports.getAllBags = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Not authorised. Admin access required' });
    }
    const allBags = await Bag.find()
      .populate('giftId', 'name quantity price image')
      .populate('userId', 'name email')
      .lean();

    const formattedBags = allBags.map((bag) => ({
      ...bag,
      gift: bag.giftId,
      giftId: bag.giftId._id,
      user: bag.userId,
      userId: bag.userId._id,
    }));

    res.status(200).json(formattedBags);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get all bags' });
  }
};

