const app = require('express');
const router = app.Router();

const transportationController = require('../controllers/transportationController');
const { verifyUser } = require('../middlewares/authMiddleware');

router.get('/transportation-mode', verifyUser, transportationController.fetchTransportationModes);
router.get('/location', verifyUser, transportationController.fetchLocations);

module.exports = router;