//  NEW notes at bottom of page AS OF 9/1 4PM
const { User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
        return User.findOne({ username }).populate('project');
      },

    // projectTasks: async (parent, {projectID}) => {
    //   const params = projectID ? { projectID } : {};
    //   return Tasks.findAll(params)
    // },
    
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('project');
      }
      // throw new AuthenticationError('You need to be logged in!');
    },
    // projectTask: async (parents, {proejectID, taskID}) => {
    //   const params = taskID ? {taskID} : {};
    //   return Project.findOne(params)
    // },
},

  Mutation: {
        login: async (parent, { email, password }) => {
       const user = await User.findOne({ email });

       if (!user) {
         throw new AuthenticationError("Invalid email address");
       }
       const correctPw = await user.isCorrectPassword(password);

       if (!correctPw) {
         throw new AuthenticationError("Invalid password");
       }

       const token = signToken(user);

       return { token, user };
     },

     addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },

      addProject: async (parent, { projectDescription, projectTeam, projectName, dueDate }, context) => {
        console.log("again:", context.user);
        if (context.user) {
          const userP = await User.findOneAndUpdate(
            { _id: context.user._id},
            { $push: {
              projects: {
                projectDescription, 
                projectTeam, 
                projectName, 
                dueDate
              }
              } }
          );
            console.log('user:', User)
            console.log("#$",userP)
          return userP;
            }
        throw new AuthenticationError('You need to be logged in!');
      },
  //*_*_*_*_*_*_*_*_*_* Unable to test due to needing to login*_*_*_*_*_*_*_*_*
  //*_*_*_*_*_*_*_*_*_* Added back in - not sure correct*_*_*_*_*_*_*_*_*

  addTasks: async (parent, { projectId, tasksDescription, tasksPriority, dueDate, tasksName }, context) => {
    if (context.user.projects) {
      return User.findOneAndUpdate(
        { _id: projectId },
        {
          $push: {
            projectTasks: { tasksDescription, tasksPriority, dueDate, tasksName },
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  },

  removeTasks: async (parent, { projectId, taskId}, context) => {
    if (context.user.projects) {
      return User.findOneAndUpdate(
        { _id: projectId },
        {
          $pull: {
            projectTasks: {
              _id: taskId,
            },
          },
        },
        { new: true }
      );
    }
    throw new AuthenticationError('You need to be logged in!');
  },
},



  //   saveProject: async (parent, { project }, context) => {
  //     if (context.user) {
  //         const user = await User.findOneAndUpdate(
  //         { _id: context.user._id },
  //         { $addToSet: { savedProjects: project } },
  //         { new: true, runValidators: true }
  //         );

  //         return user;
  //     }
  //     throw new AuthenticationError ("Please Log In to save your projects!")
  // },

  removeProject: async (parent, { projectId}, context ) => {
    if (context.user) {
        const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { projects: { _id: projectId } } },
        { new: true }
        );

        return user;
    };

    throw new AuthenticationError("Your project was not deleted! Please try again.")
},


};

module.exports = resolvers;

// inserted from HW 21 'resolvers' file..... changed out 'Book' for 'Projects'. Feel free to change
// are we inserting "tasks" up top in imports??? 9/1
