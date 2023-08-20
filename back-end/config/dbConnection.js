const mongoose = require("mongoose");
const logger = require("../utils/logger");

exports.dbConnect = (url) => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      logger.info("Connected to mongodb");
    })
    .catch((error) => {
      logger.error("Error while connecting to mongodb", error.message);
    });
};
