const FitnessClass = require('../models/FitnessClass');

exports.createClass = async (req, res) => {
    const fitnessClass = new FitnessClass({
        className: req.body.className,
        description: req.body.description,
        date: req.body.date,
        userId: req.user._id
    });

    try {
        const savedClass = await fitnessClass.save();
        res.json({
            classID: savedClass._id,
            message: 'Class created successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getAllClasses = async (req, res) => {
    try {
        const classes = await FitnessClass.find();
        res.json(classes);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getClass = async (req, res) => {
    try {
        const fitnessClass = await FitnessClass.findById(req.params.classId);
        if (!fitnessClass) return res.status(404).send('Class not found');
        res.json(fitnessClass);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateClass = async (req, res) => {
    try {
        const updatedClass = await FitnessClass.findByIdAndUpdate(req.params.classId, req.body, { new: true 
});
        res.json({
            classID: updatedClass._id,
            message: 'Class updated successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteClass = async (req, res) => {
    try {
        await FitnessClass.findByIdAndDelete(req.params.classId);
        res.json({
            message: 'Class deleted successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

