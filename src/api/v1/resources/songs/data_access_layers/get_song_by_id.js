const Song = require("../model");

// Get a song by id
module.exports = async (id) => {
  try {
    const song = await Song.findById(id);
    return song;
  } catch (error) {
    throw error;
  }
};
