const EventSchema = require('../models/Event');

// @desc Get all events
// @route GET /api/v1/event
// @access Public
exports.getEvents = async (req, res, next) => {
    try {
        const events = await Event.find();
        return res.status(200).json({
            success: true,
            count: events.length,
            data: events
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
