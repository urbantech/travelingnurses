const express = require('express');
const router = express.Router();
const feedbacksController = require('../controllers/feedbacksController');
const isAuth = require('../middleware/isAuth');

router.get('/', isAuth, feedbacksController.getFeedbacks);
router.post('/', isAuth, feedbacksController.createFeedback);
router.put('/:feedbackId', isAuth, feedbacksController.updateFeedbackStatus);

module.exports = router;

