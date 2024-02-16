const Song = require("../model");

// Delete song
module.exports = async (id) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(id);
    return deletedSong;
  } catch (error) {
    throw error;
  }
};
