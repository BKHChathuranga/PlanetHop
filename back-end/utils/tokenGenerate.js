const jwt = require("jsonwebtoken");
const logger = require("../utils/logger");
const RefreshToken = require("../models/refreshToken");
require("dotenv").config();

exports.accessTokenGenerator = async (user) => {
  try {
    const accessToken = jwt.sign(
      { userId: user._id, firstName: user.firstName, lastName: user.lastName },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
    return Promise.resolve(accessToken);
  } catch (error) {
    return Promise.reject(error);
  }
};

exports.refreshTokenGenerator = async (user) => {
  try {
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
    return Promise.resolve(refreshToken);
  } catch (error) {
    return Promise.reject(error);
  }
};
