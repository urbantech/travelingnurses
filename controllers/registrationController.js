const Registration = require('../models/Registration');

exports.registerForClass = async (req, res) => {
    const registration = new Registration({
        userID: req.user._id,
        classID: req.body.classID
    });

    try {
        const savedRegistration = await registration.save();
        res.json({
            registrationID: savedRegistration._id,
            message: 'Registration successful.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getUserRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find({ userID: req.user._id }).populate('classID');
        res.json(registrations);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateRegistrationStatus = async (req, res) => {
    try {
        const updatedRegistration = await Registration.findByIdAndUpdate(req.params.registrationId, { 
registrationStatus: req.body.status }, { new: true });
        res.json({
            registrationID: updatedRegistration._id,
            message: 'Registration status updated successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.cancelRegistration = async (req, res) => {
    try {
        await Registration.findByIdAndDelete(req.params.registrationId);
        res.json({
            message: 'Registration canceled successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

