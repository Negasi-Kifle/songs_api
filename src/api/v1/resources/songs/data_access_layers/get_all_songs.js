const Song = require("../model");
const APIFeatures = require("../../../../../utils/api_features");

// Fetch all songs in DB
module.exports = async (query) => {
  try {
    const apiFeatures = new APIFeatures(Song.find(), query)
      .paginate()
      .filter()
      .sort()
      .project();
    const songs = await apiFeatures.dbQuery;
    return songs;
  } catch (error) {
    throw error;
  }
};
