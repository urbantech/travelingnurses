const mongoose = require('mongoose');

const registrationSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    classID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FitnessClass',
        required: true
    },
    dateRegistered: {
        type: Date,
        default: Date.now
    },
    registrationStatus: {
        type: String,
        default: "Pending",
        enum: ["Pending", "Confirmed", "Cancelled"]
    }
});

module.exports = mongoose.model('Registration', registrationSchema);

