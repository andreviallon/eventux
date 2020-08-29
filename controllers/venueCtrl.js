const Venue = require('../models/Venue');

// @desc Get all venues
// @route GET /api/v1/venues
// @access Public
exports.getVenues = async (req, res, next) => {
    try {
        const venues = await Venue.find();

        return res.status(200).json({
            success: true,
            count: venues.length,
            data: venues
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}


// @desc Add all venues
// @route POST /api/v1/venues
// @access Public
exports.addVenue = async (req, res, next) => {
    try {
        let venue = await Venue.create(req.body);

        if (req.file) {
            venue.img = req.file.path;
        }

        return res.status(201).json({
            success: true,
            data: venue
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: err
            });
        }
    }
}

// @desc Delete all venues
// @route DELETE /api/v1/venues:id
// @access Public
exports.deleteVenue = async (req, res, next) => {
    try {
        const venue = await Venue.findById(req.params.id);

        if (!venue) {
            return res.status(404).json({
                success: false,
                error: 'No venue found'
            });
        }

        await venue.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Update venue
// @route PATCH /api/v1/venues/:id
// @access Public
exports.updateVenue = async (req, res, next) => {
    try {
        let venue = await Venue.findById(req.params.id);

        for (const [key, value] of Object.entries(req.body)) {
            venue[key] = value
        }

        if (req.file) {
            venue.img = req.file.path;
        }

        await venue.updateOne(venue)

        return res.status(201).json({
            success: true,
            data: venue
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
