const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const isAuth = require('../middleware/isAuth');

router.get('/', isAuth, notificationController.getAllNotifications);
router.get('/:notificationID', isAuth, notificationController.getNotification);
router.post('/', isAuth, notificationController.createNotification);
router.put('/:notificationID', isAuth, notificationController.updateNotificationStatus);

module.exports = router;

