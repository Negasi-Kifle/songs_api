const Song = require("../data_access_layers");

module.exports = async (req, res, next) => {
  try {
    const analytics = await Song.analytics();

    // Response
    res.status(200).json({
      status: 200,
      data: { analytics },
    });
  } catch (error) {
    next(error);
  }
};
