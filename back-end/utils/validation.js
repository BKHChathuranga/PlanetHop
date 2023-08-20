const User = require('../models/user');

exports.emailValidator = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

exports.passwordValidator = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    return passwordRegex.test(password);
};

exports.phoneNumberValidator = (phoneNumber) => {
    const phoneNumberRegex = /^(?:\+94|0)(?:\d{9}|\d{10})$/;
    return phoneNumberRegex.test(phoneNumber);
};

exports.npnValidator = (npn) => {
    const npnRegex = /^[A-Z]{2}[A-Z]{2}\d{4}[A-Z]{2}\d{10}$/;
    return npnRegex.test(npn);
};

exports.validateUser = async (idOrNpn) => {
    const user = await User.findOne(idOrNpn instanceof Object ? idOrNpn : { _id: idOrNpn });
    if (!user) {
        logger.warn('User not found');
        return null;
    }
    return user;
};