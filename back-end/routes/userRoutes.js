const app = require("express");
const router = app.Router();

const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.userLogin);
router.post("/acceses-token", userController.generateAccessToken);

module.exports = router;
