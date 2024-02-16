const Song = require("../model");

// Delete all songs in DB
module.exports = async () => {
  try {
    await Song.deleteMany();
  } catch (error) {
    throw error;
  }
};
