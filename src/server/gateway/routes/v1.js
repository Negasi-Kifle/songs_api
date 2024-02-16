// Version 1 API routes
const { songs } = require("../../../api/v1/resources");

/**
 * Register all the routes to the express app
 * @param {Application} app the global express application
 * @returns void
 */
module.exports = (app) => {
  app.use("/api/v1/songs", songs);
};
