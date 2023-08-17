const Location = require('../models/location');

exports.fetchlocations = async (req, res) => {
        try {

          const locations = await Location.find({});
          res.status(200).json(locations);

        } catch (error) {

          console.error('Error fetching transportation modes:', error);

        }

};
