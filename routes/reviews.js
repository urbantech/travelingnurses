const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const isAuth = require('../middleware/isAuth');

router.get('/', reviewController.getAllReviews);
router.get('/:reviewID', reviewController.getReview);
router.post('/', isAuth, reviewController.createReview);
router.put('/:reviewID', isAuth, reviewController.updateReview); // Ensure only the reviewer can edit
router.delete('/:reviewID', isAuth, reviewController.deleteReview); // Ensure only the reviewer or admin 
can delete

module.exports = router;

