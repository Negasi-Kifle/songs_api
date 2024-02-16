const { AppError } = require("../../../../../utils");
const Song = require("../data_access_layers");

// Delete song
module.exports = async (req, res, next) => {
  try {
    const deletedSong = await Song.deleteSongById(req.params.id);
    if (!deletedSong) return next(new AppError("Song does not exist", 404));

    // Response
    res.status(200).json({
      status: "SUCCESS",
      message: "Song has been deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
