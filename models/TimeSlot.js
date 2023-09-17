const mongoose = require('mongoose');

const TimeSlotSchema = new mongoose.Schema({
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    isBooked: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('TimeSlot', TimeSlotSchema);

