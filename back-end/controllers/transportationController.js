const TransportationMode = require('../models/transportationMode');
const Location = require('../models/location');
const response = require('../utils/response');
const logger = require('../utils/logger');

exports.fetchTransportationModes = async (req, res) => {
  try {
    const transportationModes = await TransportationMode.find({});

    logger.info('Transportation modes fetched successfully');
    return response.response(res, 'Transportation modes fetched successfully', transportationModes, 200);
  } catch (error) {
    logger.error("Error while fetching transportation modes ", error);
    return response.response(res, 'Error while fetching transportation modes', null, 400);
  }
};

exports.fetchLocations = async (req, res) => {
  try {
    const locations = await Location.find({});

    logger.info('Locations fetched successfully');
    return response.response(res, 'Locations fetched successfully', locations, 200);
  } catch (error) {
    logger.error("Error while fetching locations ", error);
    return response.response(res, 'Error while fetching locations', null, 400);
  }
};