const express = require('express');
const router = express.Router();
const instructorsController = require('../controllers/instructorsController');
const isAuth = require('../middleware/isAuth');

router.get('/', instructorsController.getInstructors);
router.get('/:instructorId', instructorsController.getInstructorById);
router.get('/:instructorId/timeSlots', instructorsController.getTimeSlotsByInstructor);
router.post('/:instructorId/timeSlot', isAuth, instructorsController.createTimeSlot);

module.exports = router;

