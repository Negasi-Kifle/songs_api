const Song = require("../model");

// Get songs analytics
module.exports = async () => {
  try {
    // All songs
    const allSongs = await Song.countDocuments();

    // Get all songs with the same genre
    const songsByGenre = await Song.aggregate([
      {
        $group: {
          _id: "$genre",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          genre: "$_id",
          count: 1,
          _id: 0, // Exclude _id field
        },
      },
    ]);

    // Get all songs with the same album
    const songsByAlbum = await Song.aggregate([
      {
        $group: {
          _id: "$album",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          album: "$_id",
          count: 1,
          _id: 0, // Exclude _id field
        },
      },
    ]);

    // Get all songs an artist
    const songsByArtist = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          artist: "$_id",
          count: 1,
          _id: 0, // Exclude _id field
        },
      },
    ]);

    // Count distinct artists
    const distinctArtists = await Song.distinct("artist");
    const uniqueArtists = distinctArtists.length;

    // Count distinct artists
    const distinctAlbums = await Song.distinct("album");
    const uniqueAlbums = distinctArtists.length;

    // Count distinct artists
    const distinctGenres = await Song.distinct("genre");
    const uniqueGenres = distinctArtists.length;

    // Return all analytics
    return {
      allSongs,
      songsByGenre,
      songsByAlbum,
      songsByArtist,
      uniqueArtists,
      uniqueAlbums,
      uniqueGenres,
    };
  } catch (error) {
    throw error;
  }
};
