const mongoose = require('mongoose');

const transportationMode = new mongoose.Schema({
    name : {
        type: String
    },
    pricePerKm : {
        type: Number
    },
    numOfSeats : {
        type: Number
    },
    availableSeats : {
        type: Number
    }
});

module.exports = mongoose.model('TransportationMode', transportationMode);