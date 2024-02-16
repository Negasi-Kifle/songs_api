// App Error
const { AppError } = require("../../../../utils");

/**
 * A middleware to check if role of the client is authorized
 * @param {[roles]} roles array of authorized roles
 * @returns {app} Global Express Application
 */
module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(new AppError("Access Denied", 403));
    next();
  };
};
