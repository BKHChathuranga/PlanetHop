const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { dbConnect } = require("./config/dbConnection");
const router = require("./routes");
const logger = require("./utils/logger");

const app = express();
require("dotenv").config();
const port = parseInt(process.env.PORT);

//data connetion
dbConnect(process.env.MONGO_URI);

//Body parsing as JSON
app.use(bodyParser.json());

//Enable cors
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({
    status: 200,
    message: "Welcome to PlanetHop",
  });
});

//Routes
app.use('/planetHop', router);

app.listen(port, () => {
    logger.info(`Server running on port: ${port}`);
});