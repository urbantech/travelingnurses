const Listing = require('../models/Listing');

exports.getAllListings = async (req, res) => {
    try {
        const listings = await Listing.find().populate('userID', 'username'); // Populate to 
get the user's username
        res.json(listings);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.getListingById = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.listingID);
        if (!listing) {
            return res.status(404).send('Listing not found');
        }
        res.json(listing);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.createListing = async (req, res) => {
    try {
        const newListing = new Listing({
            ...req.body,
            userID: req.user.id
        });
        const listing = await newListing.save();
        res.json(listing);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.updateListing = async (req, res) => {
    try {
        let listing = await Listing.findById(req.params.listingID);
        if (!listing) {
            return res.status(404).send('Listing not found');
        }
        // Ensure the user updating the listing is the owner of the listing
        if (listing.userID.toString() !== req.user.id) {
            return res.status(401).send('User not authorized');
        }
        listing = await Listing.findByIdAndUpdate(req.params.listingID, req.body, { new: 
true });
        res.json(listing);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.deleteListing = async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.listingID);
        if (!listing) {
            return res.status(404).send('Listing not found');
        }
        // Ensure the user deleting the listing is the owner of the listing
        if (listing.userID.toString() !== req.user.id) {
            return res.status(401).send('User not authorized');
        }
        await Listing.findByIdAndRemove(req.params.listingID);
        res.json({ message: 'Listing removed' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

