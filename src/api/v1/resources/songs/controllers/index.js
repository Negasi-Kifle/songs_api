// Export all controller method in just one object
module.exports = {
  createSong: require("./create_song"),
  getAllSongs: require("./get_all_songs"),
  getSongById: require("./get_song_by_id"),
  updateSong: require("./update_song"),
  deleteAllSongs: require("./delete_all_songs"),
  deleteSongById: require("./delete_song_by_id"),
  analytics: require("./songs_analytics"),
};
