//  NEW notes at bottom of page AS OF 9/1 4PM
const { User, Project, Tasks } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async (parent, args) => {
        console.log('users1', args)
          return User.find({args});
      },

    user: async (parent, { username }) => {
        return User.findOne({ username })
      },

    projects: async (parent, { username }) => {
    const params = username ? { username } : {};
    return Project.find(params)
    },

    up: async (parent, {projectName}) => {
      const u = projectName ? { projectName } : {}
      return User.findAll(u)
    },

    project: async (parent, { projectId }) => {
        return Project.findOne({ _id: projectId });
    },

    //I am not sure if I set these up correctly. I may be over complicating but 
      // we have mulitple tasks for each project, 
        // & we have muliple tasks for each user associated with the project
          // & we have tasks assigned by user

    // userTasks: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Tasks.find(params)
    //   },

    projectTasks: async (parent, {projectID}) => {
      const params = projectID ? { projectID } : {};
      return Tasks.findAll(params)
    },
    
    projectTask: async (parents, {proejectID, taskID}) => {
      const params = taskID ? {taskID} : {};
      return Project.findOne(params)
    },
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

    //  addUser: async (parent, { username, email, password }) => {
    //     const user = await User.create({ username, email, password });
    //     const token = signToken(user);
    //     return { token, user };
    //   },

  //   addProject: async (parent, { projectDescription }) => {
  //     // console.log("blah", projectDescription)
  //     const project = await Project.create({
  //       projectDescription,
  //     });
  //     await User.findOneAndUpdate(
  //       { $addToSet: { projects: project._id } }
  //     );
  //     console.log("user:", User)

  //       console.log("#2", project)
  //     return project;
  //   },
  //   // throw new AuthenticationError('You need to be logged in!');
  // },

  //*_*_*_*_*_*_*_*_*_* Unable to test due to needing to login*_*_*_*_*_*_*_*_*
  addProject: async (parent, { projectDescription }, context) => {
    console.log("again:", context.user)
    if (context.user) {
      const project = await Project.create({
        projectDescription,
        projectAuthor: context.user.username,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { project: project._id } }
      );
        console.log('user:', User)
        console.log("#$",project)
      return project;
    }
    throw new AuthenticationError('You need to be logged in!');
  },
  //*_*_*_*_*_*_*_*_*_* Unable to test due to needing to login*_*_*_*_*_*_*_*_*
  //*_*_*_*_*_*_*_*_*_* Added back in - not sure correct*_*_*_*_*_*_*_*_*

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
}};

module.exports = resolvers;

// inserted from HW 21 'resolvers' file..... changed out 'Book' for 'Projects'. Feel free to change
// are we inserting "tasks" up top in imports??? 9/1
