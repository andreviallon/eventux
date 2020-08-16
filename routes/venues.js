const express = require('express');
const router = express.Router();
const { getVenues, addVenue, updateVenue, deleteVenue } = require('../controllers/venueCtrl');

router
    .route('/')
    .get(getVenues)
    .post(addVenue);

router
    .route('/:id')
    .patch(updateVenue)
    .delete(deleteVenue);

module.exports = router;
