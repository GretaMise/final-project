const Gift = require('../models/giftModel');

const Bag = require('../models/bagModel');

exports.getGifts = async (req, res) => {
  try {
    const allGifts = await Gift.find();
    res.status(200).json(allGifts);
  } catch (error) {
    res.status(500).json({ error: 'Server (controller getGifts) error' });
  }
};

exports.getGiftById = async (req, res) => {
  const giftId = req.params.id;
  try {
    const giftById = await Gift.findById(giftId);

    if (!giftById) {
      res.status(404).json({ error: 'Gift not found' });
      return;
    }

    res.status(200).json(giftById);
  } catch (error) {
    res.status(500).json({ error: 'Server (controller getGigtById) error' });
  }
};

// Update

exports.updateGift = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Not authorised! Admin access required' });
    }
    const giftId = req.params.id;
    const updatedGift = await Gift.findByIdAndUpdate(giftId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedGift) {
      return res.status(404).json({ message: 'Sorry, gift not found' });
    }
    res.status(200).json({ message: 'Gift information updated' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Admin only

exports.addNewGift = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Not authorised! Admin access required' });
    }

    const newGift = new Gift(req.body);
    await newGift.save();
    res.status(201).json({ message: 'Gift created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create new gift' });
  }
};

exports.deleteGift = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Not authorised! Admin access required' });
    }
    const giftId = req.params.id;

    await Bag.deleteMany({ giftId });

    const deletedGift = await Gift.findByIdAndDelete(giftId);

    if (!deletedGift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.status(201).json({ message: 'Gift deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
