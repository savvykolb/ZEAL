//  NEW notes at bottom of page AS OF 9/1 4PM
const { User, Project, Tasks } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    // Query: {
    //     me: async (parent, args, context) => {
    //         if (context.user) {
    //           return User.findOne({ _id: context.user._id }).populate("savedProjects");
    //         }
    //         throw new AuthenticationError(
    //           "You need to log in to perform this query!"
    //         );
    //       },
    //     },

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

          addProject: async (parent, { projectDescription }, context) => {
             if (context.user) {
              const project = await Project.create({
                projectDescription,
                projectAuthor: context.user.username,
              });
      
              await User.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { projects: project._id } }
              );
      
              return project;
             }
            // throw new AuthenticationError('You need to be logged in!');
          },

          addTasks: async (parent, { tasksDescription }, context) => {
            if (context.user) {
             const tasks = await Tasks.create({
               tasksDescription,
               tasksAuthor: context.user.username,
             });
     
             await User.findOneAndUpdate(
               { _id: context.user._id },
               { $addToSet: { tasks: tasks._id } }
             );
     
             return tasks;
            }
           // throw new AuthenticationError('You need to be logged in!');
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

        // removeProject: async (parent, { projectId }, context) => {
        //     if (context.user) {
        //         const user = await User.findOneAndUpdate(
        //         { _id: context.user._id },
        //         { $pull: { savedProjects: { projectId: projectId } } },
        //         { new: true }    
        //         );

        //         return user;
        //     }

        //     throw new AuthenticationError("Your project was not deleted! Please try again.")
        // }
    },   
};

module.exports = resolvers;
      
//inserted from HW 21 'resolvers' file..... changed out 'Book' for 'Projects'. Feel free to change
//are we inserting "tasks" up top in imports??? 9/1 4:00pm