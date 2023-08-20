const logger = require('../utils/logger');
const response = require('../utils/response');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);
const { validateUser } = require('../utils/validation');
const Payment = require('../models/payment');

exports.createPayment = async (req, res) => {
    try {
        const { from, to, transportationMode, id, cost } = req.body;
        const user = await validateUser(id);

        const customer = await stripe.customers.create({ email: user.email });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        unit_amount: cost * 100,
                        product_data: {
                            name: 'Travelling Cost',
                            description: `Travel details: From ${from} to ${to} via ${transportationMode}.`,
                        },
                    },
                    quantity: 1,
                },
            ],
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            customer: customer.id,
        });

        logger.info("Payment link created successfully");
        response.response(res, "Payment link created successfully", session.url, 201);

        setTimeout(() => {
            getResponse(session.id, from, to);
        }, 1 * 60 * 1000);
    } catch (error) {
        logger.error("Error while creating payment link", error);
        return response.response(res, "Error while creating payment link", null, 500);
    }
};

const getResponse = async (sessionId, from, to) => {
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status === 'paid') {
            await Payment.create({ email: session.customer_details.email, currency: session.currency, paymentStatus: session.payment_status, from: from, to: to, cost: session.amount_total / 100 });
            logger.info("Payment paid successfully");
        } else {
            logger.warn("Payment not paid");
        }
    } catch (error) {
        logger.error('Error while getting payment response', error);
    }
};