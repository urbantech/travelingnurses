const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const isAuth = require('../middleware/isAuth');

router.get('/', transactionController.getAllTransactions);
router.get('/:transactionID', transactionController.getTransaction);
router.post('/', isAuth, transactionController.createTransaction);
router.delete('/:transactionID', isAuth, transactionController.deleteTransaction); // Potentially limit 
this only to admins or under certain conditions

module.exports = router;

