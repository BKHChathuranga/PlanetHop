const mongoose = require("mongoose");

exports.dbConnect = (url) => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongodb"))
    .catch((e) => console.log("Error occured when connecting to mongodb", e));
};
