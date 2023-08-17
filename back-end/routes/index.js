const app = require('express');
const router = app.Router();

const userRoutes = require('./userRoutes');
const transportationModeRoutes = require('./transportation-modeRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/planetHop-user', userRoutes);
router.use('/planetHop-transportation-mode', transportationModeRoutes);
router.use('/planetHop-location', locationRoutes);

module.exports = router;