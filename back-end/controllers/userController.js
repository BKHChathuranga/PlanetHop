const User = require('../models/user');
const response = require('../utils/response');
const bcrypt = require('bcrypt');
const logger = require('../utils/logger');

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, npi, email, password, phoneNumber } = req.body;
        const existingUser = await User.findOne({ $or: [{ npi }, { email }] });

        if (existingUser) {
            logger.warn('NPI or email already exists');
            return response.response(res, 'NPI or email already exists', null, 400);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            npi,
            email,
            password: hashedPassword,
            phoneNumber
        });

        await newUser.save();
        
        logger.info('User registered successfully');
        return response.response(res, 'User registered successfully', null, 201);
    } catch (error) {
        logger.error("Error while registering user", error.message);
        return response.response(res, error.message);
    }
};