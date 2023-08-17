const User = require("../models/user");
const response = require("../utils/response");
const bcrypt = require("bcrypt");
const logger = require("../utils/logger");
const {
  emailValidator,
  passwordValidator,
  phoneNumberValidator,
} = require("../utils/validation");
const {
  accessTokenGenerator,
  refreshTokenGenerator,
} = require("../utils/tokenGenerate");

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, npi, email, password, phoneNumber } = req.body;

    if (
      emailValidator(email) === false ||
      passwordValidator(password) === false ||
      (phoneNumber && phoneNumberValidator(phoneNumber) === false)
    ) {
      logger.warn("Invalid email, password or phone number");
      return response.response(
        res,
        "Invalid email, password or phone number",
        null,
        400
      );
    }

    const existingUser = await User.findOne({ $or: [{ npi }, { email }] });

    if (existingUser) {
      logger.warn("NPI or email already exists");
      return response.response(res, "NPI or email already exists", null, 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      npi,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    await newUser.save();

    logger.info("User registered successfully");
    return response.response(res, "User registered successfully", newUser, 201);
  } catch (error) {
    logger.error("Error while registering user", error.message);
    return response.response(res, error.message);
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
    const accessToken = await accessTokenGenerator(res, user);
    const refreshToken = await refreshTokenGenerator(res, user);

    if (
      !accessToken ||
      !refreshToken ||
      accessToken === undefined ||
      refreshToken === undefined
    ) {
      logger.warn("Token generation failed");
      return response.response(res, "Token generation failed", null, 400);
    }

    res.header("acceses-token", accessToken);
    res.header("refresh-token", refreshToken);

    return response.response(res, "User found", null, 200);
  } catch (error) {
    logger.error("Error while logging in user", error.message);
    return response.response(res, error.message, null, 400);
  }
};
