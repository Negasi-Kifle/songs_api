const songsSchema = require("./schema");
const { model } = require("mongoose");

// Songs model
module.exports = model("Song", songsSchema);
