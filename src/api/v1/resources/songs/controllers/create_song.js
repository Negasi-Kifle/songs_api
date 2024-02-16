const { slugifier } = require("../../../../../utils");
const Song = require("../data_access_layers");

// Create a song
module.exports = async (req, res, next) => {
  try {
    // Incoming data
    const data = req.body;
    data.title_slug = slugifier(data.title); // Slugify title

    // Create song
    const song = await Song.createSong(data);

    // Response
    res.status(200).json({
      status: "SUCCESS",
      message: "New song has been created successfully",
      data: { song },
    });
  } catch (error) {
    next(error);
  }
};
