const app = require('express');
const router = app.Router();

const userController = require('../controllers/userController');

router.post("/register", userController.register);
router.post("/login", userController.userLogin);
router.post("/access-token", userController.generateAccessToken);
router.post("/logout", userController.userLogout);

module.exports = router;