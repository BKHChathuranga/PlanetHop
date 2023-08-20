const app = require('express');
const router = app.Router();

const bookingController = require('../controllers/bookingController');

router.post('/create-booking', bookingController.createBooking);
router.get('/get-bookings/:id', bookingController.getBookings);
router.put('/cancel-booking', bookingController.cancelBooking);


module.exports = router;