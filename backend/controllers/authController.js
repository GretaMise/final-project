// autorizacijos, prisijungimai, registravimasis controlleriai

const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'authController16ln' });
    }

    const user = new User({
      name,
      email,
      password,
      role: role || 'user',
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res
      .status(201)
      .json({ access_token: token, message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'authContr36ln' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await existingUser.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid email and/or password' });
    }

    const token = jwt.sign(
      { userId: existingUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );

    res
      .status(201)
      .json({ access_token: token, message: 'Logged in successfully' });
  } catch (error) {
    res.status(500).json({ error: 'authContr70ln' });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ error: 'authCont78ln' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Not Authorised. Admin access required' });
    }
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get all users' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Not Authorised. Admin access required' });
    }
    const userId = req.user._id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Not authorized. Admin access required' });
    }
    const { userId } = req.params;
    const { role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res
        .status(403)
        .json({ error: 'Not authorized. Admin access required' });
    }
    const { userId } = req.params;

    // Prevent admin from deleting themselves
    if (userId === req.user._id.toString()) {
      return res
        .status(400)
        .json({ error: 'Admin cannot delete their own account' });
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
