const mongoose = require('mongoose');

const transportationMode = new mongoose.Schema({
    name : {
        type: String
    },
    pricePerKm : {
        type: Number
    },
    numOfSheets : {
        type: String
    }
});

module.exports = mongoose.model('TransportationMode', transportationMode);