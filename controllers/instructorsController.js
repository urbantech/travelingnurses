const Instructor = require('../models/Instructor');
const TimeSlot = require('../models/TimeSlot');

exports.getInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find().populate('user', 'username email');
        res.json(instructors);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findOne({ user: req.params.instructorId })
                                .populate('user', 'username email');
        if (!instructor) {
            return res.status(404).json({ msg: 'Instructor not found' });
        }
        res.json(instructor);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getTimeSlotsByInstructor = async (req, res) => {
    try {
        const timeSlots = await TimeSlot.find({ instructor: req.params.instructorId 
}).sort('startTime');
        res.json(timeSlots);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createTimeSlot = async (req, res) => {
    try {
        const { startTime, endTime } = req.body;

        const timeSlot = new TimeSlot({
            instructor: req.user.id,
            startTime,
            endTime
        });

        await timeSlot.save();
        res.json(timeSlot);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

