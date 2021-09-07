//notes at bottom of page
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// const Project = require('./Project');

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
              type: String
            }
          ]

          // savedProjects: [projectSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
      }
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