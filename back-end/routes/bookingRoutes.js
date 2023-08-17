const app = require('express');
const router = app.Router();

const bookingController = require('../controllers/bookingController');

router.post('/createBooking', bookingController.createBooking);

module.exports = router;