const app = require('express');
const router = app.Router();

const userController = require('../controllers/userController');
const transportationController = require('../controllers/transportationController');

router.post('/register', userController.register);
router.get('/transportationMode', transportationController.transportationMode);

module.exports = router;