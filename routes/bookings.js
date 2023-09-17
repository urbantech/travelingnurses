const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsController');
const isAuth = require('../middleware/isAuth');

router.get('/', isAuth, bookingsController.getBookings);
router.post('/', isAuth, bookingsController.createBooking);
router.put('/:bookingId', isAuth, bookingsController.updateBookingStatus);

module.exports = router;

