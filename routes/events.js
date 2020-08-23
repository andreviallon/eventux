const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getEvents, getEvent, addEvent, updateEvent, deleteEvent } = require('../controllers/eventCtrl');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/events/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('only png and jpeg file types are accepted '), false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

router
    .route('/')
    .get(getEvents)    
    .post(upload.single('img'), addEvent);

router
    .route('/:id')
    .get(getEvent)
    .patch(upload.single('img'), updateEvent)
    .delete(deleteEvent);

module.exports = router;
