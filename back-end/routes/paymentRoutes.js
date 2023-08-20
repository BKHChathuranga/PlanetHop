const app = require("express");
const router = app.Router();

const paymentController = require("../controllers/paymentController");
const { verifyUser } = require("../middlewares/authMiddleware");

router.post("/payment", verifyUser, paymentController.createPayment);

module.exports = router;