const { AppError } = require("../../../../../utils");
const Song = require("../data_access_layers");

// Get a song by id
module.exports = async (req, res, next) => {
  try {
    const song = await Song.getSongById(req.params.id);
    if (!song) return next(new AppError("Song not found", 404));

    // Response
    res.status(200).json({
      status: "SUCCESS",
      data: { song },
    });
  } catch (error) {
    next(error);
  }
};
