const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add a venue name']
    },
    address: {
        type: String,
        trim: true,
        required: [true, 'Please add an address']
    },
    city: {
        type: String,
        trim: true,
        required: [true, 'Please add a city']
    },
    zipcode: {
        type: String,
        trim: true,
        required: [true, 'Please add a zipcode']
    },
    country: {
        type: String,
        trim: true,
        required: [true, 'Please add a country']
    },
    phoneNumber: {
        type: Number,
        trim: true,
        required: [true, 'Please add a phone number']
    },
    img: {
        type: Number,
        trim: true,
        required: [true, 'Please add an image']
    },
    website: {
        type: Number,
        trim: true,
        required: [true, 'Please add a website link']
    }
});

module.exports = mongoose.model('Venue', VenueSchema);
