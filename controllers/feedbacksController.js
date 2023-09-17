const Feedback = require('../models/Feedback');

exports.getFeedbacks = async (req, res) => {
    try {
        const feedbacks = await Feedback.find().populate('user');
        res.json(feedbacks);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createFeedback = async (req, res) => {
    try {
        const { title, description } = req.body;

        const feedback = new Feedback({
            user: req.user.id,
            title,
            description
        });

        await feedback.save();
        res.json(feedback);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateFeedbackStatus = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.feedbackId);
        if (!feedback) {
            return res.status(404).json({ msg: 'Feedback not found' });
        }

        // Ensure that only an admin can change the status
        if (!req.user.isAdmin) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        feedback.status = req.body.status;
        await feedback.save();
        res.json(feedback);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

