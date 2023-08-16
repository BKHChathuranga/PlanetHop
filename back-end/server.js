const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();


app.get('/', (req, res) => {
    return res.status(200).json({
        status: 200,
        message: 'Welcome to PlanetHop'
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});