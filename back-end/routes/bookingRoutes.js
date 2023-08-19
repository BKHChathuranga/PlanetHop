const app = require('express');
const router = app.Router();

const bookingController = require('../controllers/bookingController');

router.post('/createBooking', bookingController.createBooking);
router.get('/getBookings/:id', bookingController.getBookings);
router.put('/cancelBooking', bookingController.cancelBooking);
router.post('/', bookingController.emailSend);


module.exports = router;