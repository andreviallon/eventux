const express = require('express');
const router = express.Router();
const { getEvents, addEvents, updateEvent, deleteEvent } = require('../controllers/eventCtrl');

router
    .route('/')
    .get(getEvents)
    .post(addEvents);

router
    .route('/:id')
    .patch(updateEvent)
    .delete(deleteEvens);

module.exports = router;
