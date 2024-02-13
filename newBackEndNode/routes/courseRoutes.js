const { Router } = require('express')
const studentController = require('../controllers/studentController')
const { verifyTokenAuth } = require('../middleware/auth')
const courseController = require("../controllers/courseController");
const router = Router()
router.post('/courses', courseController.createCourse)
module.exports = router
