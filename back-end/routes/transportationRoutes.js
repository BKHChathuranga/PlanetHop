const app = require('express');
const router = app.Router();

const transportationController = require('../controllers/transportationController');
const { verifyUser } = require('../middlewares/authMiddleware');

router.get('/transportation-mode', transportationController.fetchTransportationModes);
router.get('/location', transportationController.fetchLocations);

module.exports = router;