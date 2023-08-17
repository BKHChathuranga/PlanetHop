const app = require('express');
const router = app.Router();

const locationController = require('../controllers/locationController');

router.get('/location', locationController.fetchlocations);

module.exports = router;