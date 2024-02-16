const router = require("express").Router();
const validator = require("../../middleware/validator");
const {
  createSongValidation,
  updateSongValidation,
  deleteAllSongsValidation,
} = require("./validations");
const {
  createSong,
  getAllSongs,
  updateSong,
  getSongById,
  deleteAllSongs,
  deleteSongById,
} = require("./controllers");

// Mount routes with their respective controller mthods
router
  .route("/")
  .post(validator(createSongValidation), createSong)
  .get(getAllSongs)
  .delete(validator(deleteAllSongsValidation), deleteAllSongs);

router
  .route("/:id")
  .get(getSongById)
  .patch(validator(updateSongValidation), updateSong)
  .delete(deleteSongById);

// Export router
module.exports = router;
