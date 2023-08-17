const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { dbConnect } = require("./dbConnect");

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

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
