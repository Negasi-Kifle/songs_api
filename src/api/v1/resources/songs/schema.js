const { Schema } = require("mongoose");

// Songs' schema
const songsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Song title is required"],
    },
    title_slug: {
      type: String,
      index: true,
      required: [true, "Title slug is required"],
    },
    artist: {
      type: String,
      required: [true, "Artist name is required"],
    },
    album: String,
    genre: {
      type: String,
      required: [true, "Song genre is required"],
      enum: {
        values: [
          "Hip hop",
          "Acoustic",
          "Country",
          "Ambasel",
          "Anchihoye",
          "Mezmur",
        ],
        message:
          "Genre must be one the following: Hip hop, Acoustic, Country, Ambasel, Anchihoye, Mezmur",
      },
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
    },
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Export the schema
module.exports = songsSchema;
