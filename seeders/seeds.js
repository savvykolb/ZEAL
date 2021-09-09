const db = require('../config/connection');
const {User, Tasks} = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {

    await User.deleteMany({});
    await User.create(userSeeds);

  console.log('well well well shittttt');
  process.exit(0);
  }catch(error){process.exit(1)}
}
);
