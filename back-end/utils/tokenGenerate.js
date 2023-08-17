const jwt = require("jsonwebtoken");
const logger = require("../utils/logger");
const response = require("../utils/response");
const RefreshToken = require("../models/refreshToken");
require("dotenv").config();

exports.generateTokens = async (res, user) => {
  try {
    const accessToken = jwt.sign(
      { userId: user._id, firstName: user.firstName, lastName: user.lastName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
    const refreshToken = jwt.sign(
      { userId: user._id, firstName: user.firstName, lastName: user.lastName },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );
    const existRefreshToken = await RefreshToken.findOne({ userId: user._id });
    if (existRefreshToken) {
      await RefreshToken.deleteOne({ userId: user._id });
    }
    await new RefreshToken({ userId: user._id, token: refreshToken }).save();
    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    logger.error("Error while generating tokens", error);
    return response.response(res, error.message, null, 400);
  }
};
