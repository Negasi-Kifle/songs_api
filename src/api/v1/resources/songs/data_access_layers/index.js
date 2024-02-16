"use strict";

// Export all data access layer methods in just one object
module.exports = class Song {
  // Create song
  static createSong = require("./create_song");

  // Get all songs in DB
  static getAllSongs = require("./get_all_songs");

  // Get a song by id
  static getSongById = require("./get_song_by_id");

  // Update song data
  static updateSong = require("./update_song");

  // Delete all songs
  static deleteAllSongs = require("./delete_all_songs");

  // Delete song by id
  static deleteSongById = require("./delete_song_by_id");
};
