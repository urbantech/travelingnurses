const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const isAuth = require('../middleware/isAuth');
const isAdmin = require('../middleware/isAdmin'); // You'd need to create middleware that checks if a user 
has admin privileges.

router.get('/users', isAuth, isAdmin, adminController.getAllUsers);
router.delete('/users/:userID', isAuth, isAdmin, adminController.deleteUser);
router.get('/reviews/flagged', isAuth, isAdmin, adminController.getFlaggedReviews);

module.exports = router;

