const Location = require('../models/location');
const response = require('../utils/response');
const logger = require('../utils/logger');

exports.fetchlocations = async (req, res) => {
        try {

          const locations = await Location.find({});

          logger.info('Locations fetched successfully');
          return response.response(res, 'Locations fetched successfully', locations, 200);

        } catch (error) {
          logger.error("Error while fetching locations ", error.message);
          return response.response(res, error.message);

        }

};
