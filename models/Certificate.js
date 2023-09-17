const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },
    dateIssued: {
        type: Date,
        default: Date.now
    },
    certificateUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Certificate', CertificateSchema);

