// Export all middlewares in one object
module.exports = {
  validator: require("./validator"),
  checkAPIKey: require("./check_api_key"),
};
