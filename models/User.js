//notes at bottom of page
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
          },
          password: {
            type: String,
            required: true,
          },
          projects: [
            {
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
              },
              projectTeam:[
                {
                  type: String
                }
              ],
              projectTasks: [
                {
                  tasksDescription: {
                      type: String,
                      require: 'You need to leave a description!',
                      minlength: 1,
                      maxlength: 280,
                      trim: true,
                  },
                  tasksPriority: {
                      type: String,
                      require: true,
                  },
                  dueDate: {
                      type: Date,
                  },
                  tasksName: {
                      type: String,
                      required: true,
                  }
                }
              ]
            }
          ]

          // savedProjects: [projectSchema],
    },
    // {
    //     toJSON: {
    //       virtuals: true,
    //     },
    //   }
);
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
  });

  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  // userSchema.virtual('projectCount').get(function () {
  //   return this.savedProjects.length;
  // });

  const User = model('User', userSchema);

  module.exports = User;

  //Used 'user' model from 'book search hw' and replaced "books" with 'Projects'. Feel free to change