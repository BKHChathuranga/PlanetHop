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
    }
});

module.exports = mongoose.model('TransportationMode', transportationMode);