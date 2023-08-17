const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./utils/logger');

const app = express();
require('dotenv').config();
const port = parseInt(process.env.PORT);
mongoose.set("strictQuery", false);

//data connetion
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    logger.info('Connected to mongodb');
}).catch(error => {
    logger.error('Error connecting to mongodb', error.message);
});

//Body parsing as JSON
app.use(bodyParser.json());

//Enable cors
app.use(cors());
app.get('/', (req, res) => {
    return res.status(200).json({
        status: 200,
        message: 'Welcome to PlanetHop'
    });
});

app.listen(port, () => {
    logger.info(`Server running on port: ${port}`);
});