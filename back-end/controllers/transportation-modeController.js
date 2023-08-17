const TransportationMode = require('../models/transportation-mode');

exports.fetchtransportationModes = async (req, res) => {
        try {

          const transportationModes = await TransportationMode.find({});
          res.status(200).json(transportationModes);

        } catch (error) {

          console.error('Error fetching transportation modes:', error);

        }

};