const app = require('express');
const router = app.Router();

const bookingController = require('../controllers/bookingController');

router.post('/createBooking', bookingController.createBooking);
router.post('/getBookings', bookingController.getBookings);
router.post('/getNpn', bookingController.getNpn);
router.put('/cancelBooking', bookingController.cancelBooking);

module.exports = router;