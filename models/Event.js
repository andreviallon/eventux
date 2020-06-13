const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
});

module.exports = mongoose.model('Event', EventSchema);
