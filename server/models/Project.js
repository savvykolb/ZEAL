const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const projectSchema = new Schema({
    projectDescription: {
      type: String,
      required: true,
      // trim: true,
    },

   projectAuthor: {
    type: String,
    required: false,
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
        required: false, 
        // unique: true,
    },
    projectTeam:[
      {
        type: String
      }
    ],
  });
  const Project = model('Project', projectSchema);

module.exports = Project;