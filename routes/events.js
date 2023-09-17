const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');
const isAuth = require('../middleware/isAuth');

router.get('/', eventsController.getEvents);
router.post('/', isAuth, eventsController.createEvent);
router.put('/register/:eventId', isAuth, eventsController.registerForEvent);

module.exports = router;

