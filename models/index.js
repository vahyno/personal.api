var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal_api');

module.exports.Players = require('./players.js');
