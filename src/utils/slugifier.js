const slugify = require("slugify");

// Slugify
module.exports = (text) => {
  return slugify(text, {
    replacement: "_",
    remove: undefined,
    lower: true,
    strict: false,
    locale: "vi",
    trim: true,
  });
};
