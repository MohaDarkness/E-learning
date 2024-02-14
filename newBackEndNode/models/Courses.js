const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    username:{
       type: String,
        required: true

    },
    description:{
        type: String,
        required: true
    },
    sections:{
        type:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Section'
        }],
        default:[]
    }
});

courseSchema.post('save', function(doc, next){

    next()
})
const Courses = mongoose.model('courses', courseSchema);

module.exports = Courses;