const express = require('express');
const router = express.Router();
const { getTeachers, addTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherCtrl');

router
    .route('/')
    .get(getTeachers)
    .post(addTeacher);

router
    .route('/:id')
    .patch(updateTeacher)
    .delete(deleteTeacher);

module.exports = router;
