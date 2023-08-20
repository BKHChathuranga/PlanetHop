const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
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
        type: Date,
        default: () => new Date(Date.now() + 3600000)
    },
    status: {
        type: String,
        enum: ['upcoming', 'cancelled', 'completed'],
        default: 'upcoming'
    }
});

module.exports = mongoose.model('Booking', bookingSchema);