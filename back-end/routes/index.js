const app = require('express');
const router = app.Router();

const userRoutes = require('./userRoutes');
const transportationRoutes = require('./transportationRoutes');

router.use('/planetHop-user', userRoutes);
router.use('/planetHop-transportation', transportationRoutes);

module.exports = router;