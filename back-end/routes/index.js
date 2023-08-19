const app = require('express');
const router = app.Router();

const userRoutes = require('./userRoutes');
const bookingRoutes = require('./bookingRoutes');

router.use('/planetHop-user', userRoutes);
router.use('/planetHop-booking', bookingRoutes);

module.exports = router;