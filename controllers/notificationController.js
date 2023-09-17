const Notification = require('../models/Notification');

exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ userID: req.user._id });
        res.json(notifications);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getNotification = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.notificationID);
        if(!notification) return res.status(404).send('Notification not found');
        if(notification.userID.toString() !== req.user._id) return res.status(403).send('Not authorized');
        res.json(notification);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createNotification = async (req, res) => {
    const notification = new Notification({
        userID: req.body.userID,
        message: req.body.message
    });

    try {
        const savedNotification = await notification.save();
        res.json({
            notificationID: savedNotification._id,
            message: 'Notification created successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateNotificationStatus = async (req, res) => {
    try {
        const notification = await Notification.findById(req.params.notificationID);
        if (!notification) return res.status(404).send('Notification not found');
        if (notification.userID.toString() !== req.user._id) return res.status(403).send('Not authorized');
        notification.status = req.body.status || notification.status;
        await notification.save();
        res.json({
            message: 'Notification status updated successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

