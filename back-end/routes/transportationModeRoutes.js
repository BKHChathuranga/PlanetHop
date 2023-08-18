const app = require("express");
const router = app.Router();

const transportationModeController = require("../controllers/transportationModeController");
const { verifyUser } = require("../middlewares/authMiddleware");

router.get(
  "/transportation-mode",
  verifyUser,
  transportationModeController.fetchtransportationModes
);

module.exports = router;
