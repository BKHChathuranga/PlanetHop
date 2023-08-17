const Booking = require('../models/booking');
const response = require('../utils/response');
const logger = require('../utils/logger');

exports.createBooking = async (req, res) => {
    try{
        const { date, totalPrice, transportationMode, from, to, departureTime } = req.body;

        const newBooking = new Booking({
            date,
            totalPrice,
            transportationMode,
            from,
            to,
            departureTime
        });

        await newBooking.save();

        logger.info('Booking created successfully');
        return response.response(res, 'Booking created successfully', newBooking, 201);
    }
    catch(error){
        logger.error("Error while creating booking", error.message);
        return response.response(res, 'Error while creating booking', null, 400);
    }
};