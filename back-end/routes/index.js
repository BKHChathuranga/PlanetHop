const app = require('express');
const router = app.Router();

const userRoutes = require('./userRoutes');
const transportationRoutes = require('./transportationRoutes');
const paymentRoutes = require('./paymentRoutes');

router.use('/planetHop-user', userRoutes);
router.use('/planetHop-transportation', transportationRoutes);
router.use('/planetHop-payment', paymentRoutes);

module.exports = router;