// Songs model
const Song = require("../model");

/**
 * Persist song to DB
 * @param {title: string, artist: string, album: string, genre: string} data
 * @returns {Song Document} Song document
 */
module.exports = async (data) => {
  try {
    const song = await Song.create(data);
    return song;
  } catch (error) {
    throw error;
  }
};
