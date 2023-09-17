const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listingController');
const isAuth = require('../middleware/isAuth');

router.post('/', isAuth, listingController.createListing);
router.get('/', listingController.getAllListings);
router.get('/:listingId', listingController.getListing);
router.put('/:listingId', isAuth, listingController.updateListing);
router.delete('/:listingId', isAuth, listingController.deleteListing);

module.exports = router;

