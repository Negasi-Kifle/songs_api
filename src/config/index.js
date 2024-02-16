// Dotenv
require("dotenv").config();

let db = process.env.DEV_DB;
if (process.env.NODE_ENV === "production") db = process.env.PROD_DB;

// An object for holding environmental variables
module.exports = {
  env: process.env.NODE_ENV,
  db,
  api_key: process.env.API_KEY,
};
