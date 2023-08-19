const { verifyAccessToken } = require("../utils/tokenValidation");
const User = require("../models/user");
const response = require("../utils/response");
const logger = require("../utils/logger");

exports.verifyUser = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = await verifyAccessToken(token);
      const user = await User.findOne({ _id: decoded.userId });
      if (!user || user === undefined) {
        logger.warn("User not found");
        return response.response(res, "User not found", null, 400);
      }
      next();
    } catch (error) {
      logger.error("Error while verifying user: ", error);
      return response.response(res, "Error while verifying user", null, 400);
    }
  } else {
    logger.warn("No token, authorization denied");
    return response.response(res, "No token, authorization denied", null, 400);
  }
};
