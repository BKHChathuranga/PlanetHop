const User = require('../models/user');

exports.emailValidator = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

exports.validateUser = async (idOrNpn) => {
    const user = await User.findOne(idOrNpn instanceof Object ? idOrNpn : { _id: idOrNpn });
    if (!user) {
        logger.warn('User not found');
        return null;
    }
    return user;
};