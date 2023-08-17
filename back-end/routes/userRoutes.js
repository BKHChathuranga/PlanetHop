const app = require('express');
const router = app.Router();

const userController = require('../controllers/userController');

router.post('/register', userController.register);

module.exports = router;