const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isAuth = require('../middleware/isAuth');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:userId', isAuth, userController.getUserProfile);
router.put('/:userId', isAuth, userController.updateUserProfile);
router.delete('/:userId', isAuth, userController.deleteUser);

module.exports = router;

