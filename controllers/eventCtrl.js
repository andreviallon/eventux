const Event = require('../models/Event');

// @desc Get all events
// @route GET /api/v1/events
// @access Public
exports.getEvents = async (req, res, next) => {
    // res.send('GET Events');
    try {
        const events = await Event.find();
        console.log('events', events);
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
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                success: false,
                error: 'No event found'
            });
        }

        await event.remove();

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

// @desc Update event
// @route PATCH /api/v1/events/:id
// @access Public
exports.updateEvent = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);
        console.log('event', event);
        
        await event.updateOne(req.body)

        return res.status(201).json({
            success: true,
            data: event
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
