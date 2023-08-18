const app = require("express");
const router = app.Router();

const locationController = require("../controllers/locationController");
const { verifyUser } = require("../middlewares/authMiddleware");

router.get("/location", verifyUser, locationController.fetchlocations);

module.exports = router;
