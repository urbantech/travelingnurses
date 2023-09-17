const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('userID classID');
        res.json(reviews);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getReview = async (req, res) => {
    try {
        const review = await Review.findById(req.params.reviewID).populate('userID classID');
        if(!review) return res.status(404).send('Review not found');
        res.json(review);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createReview = async (req, res) => {
    const review = new Review({
        userID: req.body.userID,
        classID: req.body.classID,
        rating: req.body.rating,
        comment: req.body.comment
    });

    try {
        const savedReview = await review.save();
        res.json({
            reviewID: savedReview._id,
            message: 'Review submitted successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.reviewID, req.body, { new: true });
        res.json({
            reviewID: updatedReview._id,
            message: 'Review updated successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.reviewID);
        res.json({
            message: 'Review deleted successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

