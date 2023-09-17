const User = require('../models/User');
const Review = require('../models/Review');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.userID);
        res.json({
            message: 'User removed from the platform.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getFlaggedReviews = async (req, res) => {
    try {
        // For simplicity, let's say a review is flagged if it has been reported more than 3 times
        const flaggedReviews = await Review.find({ reportFlag: { $gt: 3 } });
        res.json(flaggedReviews);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

