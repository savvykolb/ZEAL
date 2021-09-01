const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
    projectDescription: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    projectAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    dueDate: {
        type: Date,
    },
     projectName: {
        type: String, 
        required: true, 
        unique: true,
    },
  });
  const Project = model('Project', projectSchema);

module.exports = Project;