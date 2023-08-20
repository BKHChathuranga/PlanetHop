const User = require('../models/user');
const response = require('../utils/response');
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');
const { emailValidator } = require('../utils/validation');
const { accessTokenGenerator, refreshTokenGenerator } = require('../utils/tokenGenerate');
const { verifyRefreshToken } = require('../utils/tokenValidation');

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, npn, email, password, phoneNumber } = req.body;

    if (emailValidator(email) === false) {
      logger.warn("Invalid email");
      return response.response(res, "Invalid email", null, 400);
    }

    const existingUser = await User.findOne({ $or: [{ npn }, { email }] });

    if (existingUser) {
      logger.warn('NPN or email already exists');
      return response.response(res, 'NPN or email already exists', null, 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      npn,
      email,
      password: hashedPassword,
      phoneNumber
    });

    await newUser.save();

    logger.info('User registered successfully');
    return response.response(res, 'User registered successfully', newUser, 201);
  } catch (error) {
    logger.error("Error while registering user", error.message);
    return response.response(res, 'Error while registering user', null, 400);
  }
};

exports.userLogin = async ({ body: { email, password } }, res) => {
  try {
    if (!email || !password) {
      logger.warn("email or Password empty");
      response.response(res, "Please enter email and password", null, 400);
    }
    const user = await User.findOne({ email });

    if (!user) {
      logger.warn("email is not registered");
      return response.response(res, "User not found", null, 400);
    }

    if (!(await bcrypt.compareSync(password, user.password))) {
      logger.warn("Password is Incorrect");
      return response.response(res, "Password is Incorrect", null, 400);
    }
    const accessToken = await accessTokenGenerator(user);
    const refreshToken = await refreshTokenGenerator(user);

    if (
      !accessToken ||
      !refreshToken ||
      accessToken === undefined ||
      refreshToken === undefined
    ) {
      logger.warn("Token generation failed");
      return response.response(res, "Token generation failed", null, 400);
    }

    res.header("access_token", accessToken);
    res.header("refresh_token", refreshToken);

    logger.info("Login Successfull");
    return response.response(res, "Login Successfull", null, 200);
  } catch (error) {
    logger.error("Error while logging in user: ", error);
    return response.response(res, 'Error while logging in user', null, 400);
  }
};

exports.generateAccessToken = async (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = await verifyRefreshToken(token);
      decoded["_id"] = decoded.userId;
      delete decoded.userId;
      const accessToken = await accessTokenGenerator(decoded);
      res.header("acceses-token", accessToken);
      return response.response(res, "Token generated successfully", null, 200);
    } catch (error) {
      logger.error("Error while generating token: ", error);
      return response.response(res, 'Error while generating token', null, 400);
    }
  } else {
    logger.warn("No token, authorization denied");
    return response.response(res, "No token, authorization denied", null, 400);
  }
};

exports.userLogout = async (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = await verifyRefreshToken(token);
      await RefreshToken.deleteOne({ userId: decoded.userId });
      return response.response(res, "Logout Successfull", null, 200);
    } catch (error) {
      logger.error("Error while logout: ", error);
      return response.response(res, error.message, null, 400);
    }
  } else {
    logger.warn("No token, cannot remove refresh token");
    return response.response(
      res,
      "No token, cannot remove refresh token",
      null,
      400
    );
  }
};