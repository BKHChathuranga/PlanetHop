const app = require('express');
const router = app.Router();

const bookingController = require('../controllers/bookingController');
const { verifyUser } = require('../middlewares/authMiddleware');

router.post('/create-booking', verifyUser, bookingController.createBooking);
router.get('/get-bookings/:id', verifyUser, bookingController.getBookings);
router.put('/cancel-booking', verifyUser, bookingController.cancelBooking);


module.exports = router;