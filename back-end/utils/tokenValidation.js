const jwt = require("jsonwebtoken");
const RefreshToken = require("../models/refreshToken");
require("dotenv").config();

exports.verifyAccessToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    return Promise.resolve(decoded);
  } catch (error) {
    return Promise.reject({ error: true, message: error.message });
  }
};

exports.verifyRefreshToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const existRefreshToken = await RefreshToken.findOne({
      token: token,
    });
    if (existRefreshToken === null || existRefreshToken === undefined) {
      return Promise.reject({ error: true, message: "Invalid Refresh token" });
    }
    return Promise.resolve(decoded);
  } catch (error) {
    return Promise.reject({ error: true, message: error.message });
  }
};
