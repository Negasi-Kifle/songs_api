/**
 * Send unknown environment error
 * @param {err} Custom or Default error object
 * @param {res} Response object
 */

module.exports = (res) => {
  res.status(500).json({
    status: "ERROR",
    message: "Unknown environment selected",
  });
};
