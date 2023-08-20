const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        required: true,
        enum: ['paid', 'unpaid'],
        default: 'unpaid'
    },
    isEmailSent: {
        type: String,
        required: true,
        enum: ['sent', 'not sent'],
        default: 'not sent'
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    cost: {
        type: Number
    }
});

module.exports = mongoose.model('Payment', paymentSchema);