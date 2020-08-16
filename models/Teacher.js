const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Please add a last name']
    },
    description: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        trim: true,
        required: [true, 'Please add an image']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please add an email']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please add a phone number']
    } 
});

module.exports = mongoose.model('Teacher', TeacherSchema);
