const { Schema, model } = require('mongoose');

const tasksSchema = new Schema({
    tasksDescription: {
        type: String,
        require: 'You need to leave a description!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    tasksAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    tasksPriority: {
        type: String,
        require: true,
        unique: true,
    },
    tasksStatus: {
        type: String,
        require: true,
        unique: true,
    },
    dueDate: {
        type: Date,
    },
    tasksName: {
        type: String,
        required: true,
        unique: true,
    },
})
const Tasks = model('Tasks', tasksSchema);
module.exports = Tasks;