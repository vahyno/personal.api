var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// player schema
var PlayersSchema = new Schema({
  name: String,
  height: String,
  yearOfBirth: Number,
  skills: String

});

// player model
var Player = mongoose.model('Player', PlayersSchema);

module.exports = Player;
