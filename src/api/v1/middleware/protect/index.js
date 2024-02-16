// A middleware to check and validate clients JWT token
module.exports = async (req, res, next) => {
  try {
    // Logics like validating jwt and checking recent credential changes
  } catch (error) {
    next(error);
  }
};
