const mongoose = require('mongoose');

const transportationModeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    noOfSheets: {
        type: Number,
        required: [true, 'Number of sheets is required']
    },
    pricePerKm: {
        type: String,
        required: [true, 'Price per Km is required']
    }
});

module.exports = mongoose.model('TransportationMode', transportationModeSchema);