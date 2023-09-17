const Transaction = require('../models/Transaction');

exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('userID classID');
        res.json(transactions);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.transactionID).populate('userID 
classID');
        if(!transaction) return res.status(404).send('Transaction not found');
        res.json(transaction);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createTransaction = async (req, res) => {
    const transaction = new Transaction({
        userID: req.body.userID,
        classID: req.body.classID,
        amount: req.body.amount,
        paymentMethod: req.body.paymentMethod
    });

    try {
        const savedTransaction = await transaction.save();
        res.json({
            transactionID: savedTransaction._id,
            message: 'Transaction processed successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.transactionID);
        res.json({
            message: 'Transaction deleted successfully.'
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

