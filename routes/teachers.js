const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getTeachers, addTeacher, updateTeacher, deleteTeacher } = require('../controllers/teacherCtrl');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/teachers/');
    },
    filename: function (req, file, cb) {
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
    .get(getTeachers)
    .post(upload.single('img'), addTeacher);

router
    .route('/:id')
    .patch(upload.single('img'), updateTeacher)
    .delete(deleteTeacher);

module.exports = router;
