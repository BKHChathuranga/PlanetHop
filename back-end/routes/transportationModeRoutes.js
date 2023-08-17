const app = require('express');
const router = app.Router();

const transportationModeController = require('../controllers/transportationModeController');

router.get('/transportation-mode', transportationModeController.fetchtransportationModes);


module.exports = router;