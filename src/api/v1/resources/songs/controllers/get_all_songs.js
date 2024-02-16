const Song = require("../data_access_layers");

// Get all songs in DB
module.exports = async (req, res, next) => {
  try {
    const songs = await Song.getAllSongs(req.query);

    // Response
    res.status(200).json({
      status: "SUCCESS",
      results: songs.length,
      data: { songs },
    });
  } catch (error) {
    next(error);
  }
};
