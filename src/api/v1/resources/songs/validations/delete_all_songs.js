const Joi = require("joi");
const config = require("../../../../../config");

// Validate the API that deletes a song
module.exports = Joi.object({
  delete_key: Joi.string().valid(config.delete_key).required().messages({
    "any.required": "Please provide a valid delete key",
    "any.only": "Please provide a valid delete key",
  }),
});
