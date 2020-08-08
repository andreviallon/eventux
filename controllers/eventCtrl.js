const Event = require('../models/Event');

// @desc Get all events
// @route GET /api/v1/events
// @access Public
exports.getEvents = async (req, res, next) => {
    res.send('GET events');
}


// @desc Add all events
// @route POST /api/v1/events
// @access Public
exports.addEvent = async (req, res, next) => {
    try {
        console.log('req', req.body);
        const event = await Event.create(req.body);

        return res.status(201).json({
            success: true,
            data: event
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

// @desc Delete all events
// @route DELETE /api/v1/events:id
// @access Public
exports.deleteEvent = async (req, res, next) => {
    res.send('DELETE event');
}

// @desc Update event
// @route PATCH /api/v1/events/:id
// @access Public
exports.updateEvent = async (req, res, next) => {
    res.send('PATCH event');
}
