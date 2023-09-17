const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    bio: {
        type: String,
        required: true
    },
    qualifications: {
        type: [String]
    }
});

module.exports = mongoose.model('Instructor', InstructorSchema);

