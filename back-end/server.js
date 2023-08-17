const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
require('dotenv').config();
const port = parseInt(process.env.PORT);
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to mongodb')).catch(e => console.log('Error occured when connecting to mongodb', e));

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
    console.log(`Server running on port: ${port}`);
});