const app = require("express");
const router = app.Router();

const paymentController = require("../controllers/paymentController");

router.post("/payment", paymentController.createPayment);

module.exports = router;