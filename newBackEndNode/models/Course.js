const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: String,
    teachers: {
      type: [{
        type:mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    default:[]
    },
    students: { 
        type: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }],
        default: []
      }
  });

const Course = mongoose.model('courses', courseSchema);

module.exports = Course;