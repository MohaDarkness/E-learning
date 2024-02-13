const User = require("../models/User");
const Course = require("../models/Course")
module.exports.createCourse = async (req, res) => {
    const {name,teachers, students} = req.body
    let flag = 0
    let studentIds
    let teacherIds
    try {
        studentIds = []
        teacherIds = []
        for (const student of students) {
            const studentId = await User.findOne({username: student}).exec()
            studentIds.push(studentId._id)
        }

        for (const teacher of teachers){
            flag = 1
            const teacherId = await User.findOne({username: teacher}).exec()
            teacherIds.push(teacherId._id)
        }
        console.log(studentIds)
        const course = await Course.create({name, students:studentIds, teachers:teacherIds});
        // Update user (student)documents with the new course reference
        await Promise.all(
            studentIds.map(async (studentId) => {
                const user = await User.findByIdAndUpdate(
                    studentId,
                    { $push: { courses: course._id } },
                    { new: true }
                );
            })
        )

        // Update teacher documents with the new course reference
        await Promise.all(
            teacherIds.map(async (teacherId) => {
                const user = await User.findByIdAndUpdate(
                    teacherId,
                    { $push: { courses: course._id } },
                    { new: true }
                );
            })
        );
        console.log(JSON.stringify(course));
        res.status(201).json({})

    } catch (err) {
        console.log(err)
        console.log("here's the number of flag " + flag)
        if (!flag)
            res.status(404).json({message: 'student not found '})
        res.status(404).json({message: 'teacher not found'})
    }

}
