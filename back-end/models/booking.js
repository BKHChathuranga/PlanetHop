const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Total price is required']
    },
    transportationMode: {
        type: String,
        required: [true, 'Transportation mode is required']
    },
    from: {
        type: String,
        required: [true, 'From is required']
    },
    to: {
        type: String,
        required: [true, 'To is required']
    },
    departureTime: {
        type: Date
    },
    npn: {
        type: Array,
        required: [true, 'NPN is required']
    }
});

module.exports = mongoose.model('Booking', bookingSchema);