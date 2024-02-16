const Song = require("../data_access_layers");

// Delete all songs in DB
module.exports = async (req, res, next) => {
  try {
    await Song.deleteAllSongs();

    // Response
    res.status(200).json({
      status: "SUCCESS",
      message: "All songs in DB have been deleted permanently",
    });
  } catch (error) {
    next(error);
  }
};
