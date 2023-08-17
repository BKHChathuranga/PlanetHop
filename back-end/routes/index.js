const app = require('express');
const router = app.Router();

const userRoutes = require('./userRoutes');

router.use('/planetHop-user', userRoutes);

module.exports = router;