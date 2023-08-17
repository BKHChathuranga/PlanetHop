const TransportationMode = require('../models/transportationMode')
const response = require('../utils/response');
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');

exports.transportationMode = async (req, res) => {
    try {
        const transportationModes = await TransportationMode.find();
        res.json(transportationModes);
      } catch (error) {
        console.error('Error fetching transportation modes:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
};