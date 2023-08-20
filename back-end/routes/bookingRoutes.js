const app = require('express');
const router = app.Router();

const bookingController = require('../controllers/bookingController');

router.post('/createBooking', bookingController.createBooking);
router.get('/getBookings/:id', bookingController.getBookings);
router.put('/cancelBooking', bookingController.cancelBooking);


module.exports = router;