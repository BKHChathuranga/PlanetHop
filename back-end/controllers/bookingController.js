const Booking = require('../models/booking');
const response = require('../utils/response');
const logger = require('../utils/logger');
const { validateUser } = require('../utils/validation');

exports.createBooking = async (req, res) => {
    try {
        const { date, totalPrice, transportationMode, from, to, departureTime, id } = req.body;

        const user = await validateUser(id);
        if (!user) {
            return response.response(res, 'User not found', null, 404);
        }

        const newBooking = new Booking({
            date,
            totalPrice,
            transportationMode,
            from,
            to,
            departureTime,
            npn: user.npn,
        });

        await newBooking.save();

        logger.info('Booking created successfully');
        return response.response(res, 'Booking created successfully', newBooking, 201);
    } catch (error) {
        logger.error('Error while creating booking', error);
        return response.response(res, 'Error while creating booking', null, 400);
    }
};

exports.getBookings = async (req, res) => {
    try {
        const user = await validateUser(req.params.id);
        if (!user) {
            return response.response(res, 'User not found', null, 404);
        }

        const bookings = await Booking.find({ npn: { $in: user.npn } });

        logger.info('Bookings fetched successfully');
        return response.response(res, 'Bookings fetched successfully', bookings, 200);
    } catch (error) {
        logger.error('Error while fetching bookings', error);
        return response.response(res, 'Error while fetching bookings', null, 400);
    }
};

exports.cancelBooking = async (req, res) => {
    try {
        const { id } = req.body;

        const user = await validateUser(id);
        if (!user) {
            return response.response(res, 'User not found', null, 404);
        }

        const cancelBooking = await Booking.findOneAndUpdate({ npn: { $in: user.npn } }, { status: 'cancelled' }, { new: true });

        if (!cancelBooking) {
            logger.warn('Booking not found');
            return response.response(res, 'Booking not found', null, 404);
        }

        logger.info('Booking cancelled successfully');
        return response.response(res, 'Booking cancelled successfully', cancelBooking, 200);
    } catch (error) {
        logger.error('Error while cancelling booking', error);
        return response.response(res, 'Error while cancelling booking', null, 400);
    }
};

