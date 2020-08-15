const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add an event title']
    },
    description: {
        type: String,
        trim: true,
        required: false
    },
    courseDate: {
        type: Map,
        of: Number,
        required: [true, 'Please add an event date']
    },
    startTime: {
        type: String,
        trim: true,
        required: [true, 'Please add an event start time']
    },
    endTime: {
        type: String,
        trim: true,
        required: [true, 'Please add an event end time']
    },
    price: {
        type: Number,
        required: [true, 'Please add an event price']
    },
    tags: {
        type: Array,
        required: false
    },
    img: {
        type: String,
        required: true
    },
    venueId: {
        type: String
    },
    teacherId: {
        type: String
    }
});

module.exports = mongoose.model('Event', EventSchema);
