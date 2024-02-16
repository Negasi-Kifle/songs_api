const Joi = require("joi");

// Validate the API that updates song data
module.exports = Joi.object({
  title: Joi.string().messages({
    "string.empty": "Song title is required",
  }),
  artist: Joi.string().messages({
    "string.empty": "Artist is required",
  }),
  album: Joi.string().messages({
    "string.empty": "Album can not be empty string",
  }),
  genre: Joi.string()
    .valid("Hip hop", "Acoustic", "Country", "Ambasel", "Anchihoye", "Mezmur")
    .messages({
      "any.only":
        "Genre must be one the following: Hip hop, Acoustic, Country, Ambasel, Anchihoye, Mezmur",
    }),
});
