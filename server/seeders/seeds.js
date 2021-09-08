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
  
      console.log("well well well")
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });