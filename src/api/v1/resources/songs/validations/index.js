// Export all validation in just on object
module.exports = {
  createSongValidation: require("./create_song"),
  updateSongValidation: require("./update_song"),
  deleteAllSongsValidation: require("./delete_all_songs"),
};
