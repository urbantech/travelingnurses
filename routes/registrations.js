const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');
const isAuth = require('../middleware/isAuth');

router.post('/', isAuth, registrationController.registerForClass);
router.get('/', isAuth, registrationController.getUserRegistrations);
router.put('/:registrationId', isAuth, registrationController.updateRegistrationStatus);
router.delete('/:registrationId', isAuth, registrationController.cancelRegistration);

module.exports = router;

