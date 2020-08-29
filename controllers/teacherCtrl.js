const Teacher = require('../models/Teacher');

// @desc Get all teachers
// @route GET /api/v1/teachers
// @access Public
exports.getTeachers = async (req, res, next) => {
    // res.send('GET Teachers');
    try {
        const teachers = await Teacher.find();

        return res.status(200).json({
            success: true,
            count: teachers.length,
            data: teachers
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}


// @desc Add all teachers
// @route POST /api/v1/teachers
// @access Public
exports.addTeacher = async (req, res, next) => {
    try {
        const teacher = await Teacher.create(req.body);

        if (req.file) {
            teacher.img = req.file.path;
        }

        return res.status(201).json({
            success: true,
            data: teacher
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: err
            });
        }
    }
}

// @desc Delete all teachers
// @route DELETE /api/v1/teachers:id
// @access Public
exports.deleteTeacher = async (req, res, next) => {
    try {
        const teacher = await Teacher.findById(req.params.id);

        if (!teacher) {
            return res.status(404).json({
                success: false,
                error: 'No teacher found'
            });
        }

        await teacher.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

// @desc Update teacher
// @route PATCH /api/v1/teachers/:id
// @access Public
exports.updateTeacher = async (req, res, next) => {
    try {
        let teacher = await Teacher.findById(req.params.id);

        for (const [key, value] of Object.entries(req.body)) {
            teacher[key] = value
        }

        if (req.file) {
            teacher.img = req.file.path;
        }

        await teacher.updateOne(teacher)

        return res.status(201).json({
            success: true,
            data: teacher
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
