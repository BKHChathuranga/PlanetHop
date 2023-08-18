const app = require('express');
const router = app.Router();

const transportationController = require('../controllers/transportationController');

router.get('/transportation-mode', transportationController.fetchTransportationModes);
router.get('/location', transportationController.fetchLocations);

module.exports = router;