const app = require('express');
const router = app.Router();

const transportationModeController = require('../controllers/transportation-modeController');

router.get('/transportation-mode', transportationModeController.fetchtransportationModes);


module.exports = router;