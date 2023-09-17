const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    classID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FitnessClass'
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'PayPal', 'Debit Card'],
        required: true
    },
    dateOfTransaction: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);

