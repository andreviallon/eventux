const express = require('express');
const router = express.Router();
const { getEvents, addEvent, updateEvent, deleteEvent } = require('../controllers/eventCtrl');

router
    .route('/')
    .get(getEvents)
    .post(addEvent);

router
    .route('/:id')
    .patch(updateEvent)
    .delete(deleteEvent);

module.exports = router;
