var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/personal_api');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/personal_api' );

module.exports.Player = require('./players.js');
