const db = require('../config/connection');
const {User, Project, Tasks} = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');

db.once('open', async () => {
    try {
      await Project.deleteMany({});
      await Project.create(projectSeeds);
      await User.deleteMany({});
      await User.create(userSeeds);
  
<<<<<<< HEAD
      for (let i = 0; i < projectSeeds.length; i++) {
        const { _id, projectAuthor } = await Project.create(projectSeeds[i]);
        const user = await User.findOneAndUpdate(
          { username: projectAuthor },
          {
            $addToSet: {
              projects: _id,
            },
          }
        );
      }
=======
      console.log("well well well")
      process.exit(0);
>>>>>>> main
    } catch (err) {
      throw err;
    }
  });