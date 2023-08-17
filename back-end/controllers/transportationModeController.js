const TransportationMode = require('../models/transportationMode');
const response = require('../utils/response');
const logger = require('../utils/logger');

exports.fetchtransportationModes = async (req, res) => {
        try {

          const transportationModes = await TransportationMode.find({});

          logger.info('Transportation modes fetched successfully');
          return response.response(res, 'Transportation modes fetched successfully', transportationModes, 200);

        } catch (error) {
          logger.error("Error while fetching transportation modes ", error.message);
          return response.response(res, error.message);
        }

};