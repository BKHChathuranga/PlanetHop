const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    npi: {
        type: String,
        required: [true, 'NPI is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'Password is required']
    },
    phoneNumber: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);