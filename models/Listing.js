const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    // ... add other necessary fields for the listing
});

module.exports = mongoose.model('Listing', ListingSchema);

