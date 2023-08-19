const Booking = require("../models/booking");
const User = require("../models/user");
const response = require("../utils/response");
const logger = require("../utils/logger");
const { sendConfirmationEmail } = require("../utils/emailConfirmation");

const validateUser = async (idOrNpn) => {
  const user = await User.findOne(
    idOrNpn instanceof Object ? idOrNpn : { _id: idOrNpn }
  );
  if (!user) {
    logger.warn("User not found");
    return null;
  }
  return user;
};

exports.createBooking = async (req, res) => {
  try {
    const {
      date,
      totalPrice,
      transportationMode,
      from,
      to,
      departureTime,
      id,
      npnList,
    } = req.body;

    const user = await validateUser(id);
    if (!user) {
      return response.response(res, "User not found", null, 404);
    }

    const existingUsers = await User.find({ npn: { $in: npnList } });

    if (existingUsers.length !== npnList.length) {
      logger.warn("Some users not found");
      return response.response(res, "Some users not found", null, 404);
    }

    const npnSet = new Set([...npnList, user.npn]);

    if (npnSet.size !== npnList.length + 1) {
      logger.warn("Duplicate NPNs found");
      return response.response(res, "Duplicate NPNs found", null, 400);
    }

    const newBooking = new Booking({
      date,
      totalPrice,
      transportationMode,
      from,
      to,
      departureTime,
      npn: Array.from(npnSet),
    });

    await newBooking.save();

    logger.info("Booking created successfully");
    return response.response(
      res,
      "Booking created successfully",
      newBooking,
      201
    );
  } catch (error) {
    logger.error("Error while creating booking", error);
    return response.response(res, "Error while creating booking", null, 400);
  }
};

exports.getBookings = async (req, res) => {
  try {
    const { id } = req.body;

    const user = await validateUser(id);
    if (!user) {
      return response.response(res, "User not found", null, 404);
    }

    const bookings = await Booking.find({ npn: { $in: user.npn } });

    logger.info("Bookings fetched successfully");
    return response.response(
      res,
      "Bookings fetched successfully",
      bookings,
      200
    );
  } catch (error) {
    logger.error("Error while fetching bookings", error);
    return response.response(res, "Error while fetching bookings", null, 400);
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const { id } = req.body;

    const user = await validateUser(id);
    if (!user) {
      return response.response(res, "User not found", null, 404);
    }

    const cancelBooking = await Booking.findOneAndUpdate(
      { npn: { $in: user.npn } },
      { status: "cancelled" },
      { new: true }
    );

    if (!cancelBooking) {
      logger.warn("Booking not found");
      return response.response(res, "Booking not found", null, 404);
    }

    logger.info("Booking cancelled successfully");
    return response.response(
      res,
      "Booking cancelled successfully",
      cancelBooking,
      200
    );
  } catch (error) {
    logger.error("Error while cancelling booking", error);
    return response.response(res, "Error while cancelling booking", null, 400);
  }
};

exports.getNpn = async (req, res) => {
  try {
    const { npn } = req.body;

    const user = await validateUser({ npn });
    if (!user) {
      return response.response(res, "User not found", null, 404);
    }

    logger.info("NPN fetched successfully");
    return response.response(res, "NPN fetched successfully", user.npn, 200);
  } catch (error) {
    logger.error("Error while fetching NPN", error);
    return response.response(res, "Error while fetching NPN", null, 400);
  }
};

exports.emailSend = async (req, res) => {
  try {
    let info = await sendConfirmationEmail();
    logger.info("Email accepted: " + info.accepted);
    return response.response(res, "sending email to " + info.accepted, info, 400);
  } catch (error) {
    logger.error("Error while sending email", error);
    return response.response(res, "Error while sending email: " + error, null, 400);
  }
};
