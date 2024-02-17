const Song = require("../model");

// Get songs analytics
module.exports = async () => {
  try {
    const songsAnalytics = await Song.aggregate([
      {
        $group: {
          _id: "",
        },
      },
    ]);
  } catch (error) {
    throw error;
  }
};
