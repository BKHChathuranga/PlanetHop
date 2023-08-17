const app = require("express");
const router = app.Router();

const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.userLogin);

module.exports = router;
