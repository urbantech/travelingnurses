const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) return res.status(400).send('Email already exists');

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.json({
            userID: savedUser._id,
            message: 'User registered successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    const token = jwt.sign({ userId: user._id }, 'YOUR_JWT_SECRET', { expiresIn: '1h' });

    res.json({
        token: token,
        message: 'Login successful.'
    });
};

exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).select('-password');
        if (!user) return res.status(404).send('User not found');
        res.json(user);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateUserProfile = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        res.json({
            userID: updatedUser._id,
            message: 'User updated successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.json({
            message: 'User deleted successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

