const app = require('express');
const router = app.Router();

const bookingController = require('../controllers/bookingController');

router.post('/createBooking', bookingController.createBooking);
router.post('/getBookings', bookingController.getBookings);
router.post('/getNpn', bookingController.getNpn);

module.exports = router;