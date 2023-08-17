const mongoose = require('mongoose');

const location = new mongoose.Schema({
    name : {
        type: String
    },

    distanceFromSun : {
        type: Number
    }


});

module.exports = mongoose.model('Location', location);