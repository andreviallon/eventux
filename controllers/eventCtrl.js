
// @desc Get all events
// @route GET /api/v1/events
// @access Public
exports.getEvents = (req, res, next) => {
    res.send('GET events');
}


// @desc Add all events
// @route POST /api/v1/events
// @access Public
exports.addEvents = (req, res, next) => {
    res.send('POST events');
}

// @desc Delete all events
// @route DELETE /api/v1/events:id
// @access Public
exports.deleteEvent = (req, res, next) => {
    res.send('DELETE event');
}

// @desc Update event
// @route PATCH /api/v1/events/:id
// @access Public
exports.updateEvent = async (req, res, next) => {
    res.send('PATCH event');
}
