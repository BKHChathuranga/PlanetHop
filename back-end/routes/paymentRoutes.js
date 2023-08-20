const app = require("express");
const router = app.Router();

const paymentController = require("../controllers/paymentController");
const { verifyUser } = require("../middlewares/authMiddleware");

router.post("/payment", paymentController.createPayment);

module.exports = router;