const Booking = require('../models/Booking');
const TimeSlot = require('../models/TimeSlot');

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
                                .populate('instructor timeSlot');
        res.json(bookings);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createBooking = async (req, res) => {
    try {
        const { instructorId, timeSlotId } = req.body;

        // Ensure the time slot is available
        const timeSlot = await TimeSlot.findById(timeSlotId);
        if (!timeSlot || timeSlot.isBooked) {
            return res.status(400).json({ msg: 'Time slot is not available' });
        }

        const booking = new Booking({
            user: req.user.id,
            instructor: instructorId,
            timeSlot: timeSlotId
        });

        // Mark the time slot as booked
        timeSlot.isBooked = true;
        await timeSlot.save();

        await booking.save();
        res.json(booking);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateBookingStatus = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.bookingId);
        if (!booking) {
            return res.status(404).json({ msg: 'Booking not found' });
        }

        // Ensure that only the instructor or the user who booked can change the status
        if (booking.instructor.toString() !== req.user.id && booking.user.toString() !== 
req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        booking.status = req.body.status;
        await booking.save();
        res.json(booking);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

