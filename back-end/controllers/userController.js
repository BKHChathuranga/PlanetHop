const User = require('../models/user');
const response = require('../utils/response');
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');
const { emailValidator, passwordValidator, phoneNumberValidator, npnValidator } = require('../utils/validation');

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, npn, email, password, phoneNumber } = req.body;

        if (
            emailValidator(email) === false ||
            passwordValidator(password) === false ||
            npnValidator(npn) === false ||
            (phoneNumber && phoneNumberValidator(phoneNumber) === false)
        ) {
            logger.warn("Invalid email, npn, password or phone number");
            return response.response(res, "Invalid email, npn, password or phone number", null, 400);
        }
        
        const existingUser = await User.findOne({ $or: [{ npn }, { email }] });

        if (existingUser) {
            logger.warn('NPN or email already exists');
            return response.response(res, 'NPN or email already exists', null, 400);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            npn,
            email,
            password: hashedPassword,
            phoneNumber
        });

        await newUser.save();
        
        logger.info('User registered successfully');
        return response.response(res, 'User registered successfully', newUser, 201);
    } catch (error) {
        logger.error("Error while registering user", error.message);
        return response.response(res, 'Error while registering user', null, 400);
    }
};