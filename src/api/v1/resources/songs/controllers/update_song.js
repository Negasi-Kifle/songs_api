const { AppError } = require("../../../../../utils");
const Song = require("../data_access_layers");

// Update song data
module.exports = async (req, res, next) => {
  try {
    // Incoming data
    const data = req.body;

    // Update song
    const song = await Song.updateSong(req.params.id, data);
    if (!song) return next(new AppError("Song does not exist", 404));

    // Response
    res.status(200).json({
      status: "SUCCESS",
      message: "Song updated successfully",
      data: { song },
    });
  } catch (error) {
    next(error);
  }
};
