const Song = require("../model");

// Update song data
module.exports = async (id, data) => {
  try {
    const song = await Song.findByIdAndUpdate(id, data, {
      runValidators: true,
      new: true,
    });
    return song;
  } catch (error) {
    throw error;
  }
};
