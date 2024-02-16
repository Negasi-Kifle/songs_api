const Joi = require("joi");

// Validate the API that creates a song
module.exports = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Song title is required",
    "string.empty": "Song title is required",
  }),
  artist: Joi.string().required().messages({
    "any.required": "Artist is required",
    "string.empty": "Artist is required",
  }),
  album: Joi.string().messages({
    "string.empty": "Album can not be empty string",
  }),
  genre: Joi.string()
    .valid("Hip hop", "Acoustic", "Country", "Ambasel", "Anchihoye", "Mezmur")
    .required()
    .messages({
      "any.required": "Genre of the song is required",
      "any.only":
        "Genre must be one the following: Hip hop, Acoustic, Country, Ambasel, Anchihoye, Mezmur",
    }),
});
