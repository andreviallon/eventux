const express = require('express');
const router = express.Router();
const { getEvents } = require('../controllers/events');

router
    .route('/')
    .get(getEvents)

module.exports = router;
