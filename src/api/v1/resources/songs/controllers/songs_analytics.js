const Song = require("../data_access_layers");

module.exports = async (req, res, next) => {
  try {
    const analytics = await Song.analytics();

    // Response
    res.status(200).json({
      status: "SUCCESS",
      data: { analytics },
    });
  } catch (error) {
    next(error);
  }
};
