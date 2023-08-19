const logger = require('../utils/logger');
const response = require('../utils/response');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);

exports.createPayment = async (req, res) => {
    try {
        const { from, to, transportationMode, email, cost } = req.body;
        const totalAmount = cost * 100;

        const customer = await stripe.customers.create({ email });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        unit_amount: totalAmount,
                        product_data: {
                            name: 'Travelling Cost',
                            description: `Travel details: From ${from} to ${to} via ${transportationMode}.`,
                        },
                    },
                    quantity: 1,
                },
            ],
            success_url: `http://localhost:3000/success`,
            cancel_url: `http://localhost:3000/cancel`,
            customer: customer.id,
        })

        logger.info("Payment created successfully");
        response.response(res, "Payment created successfully", session.url, 201);
    } catch (error) {
        console.log(error);
        logger.error("Error while creating payment", error);
        return response.response(res, "Error while creating payment", null, 500);
    }
};