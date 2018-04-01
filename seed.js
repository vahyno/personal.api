var db = require('./models');


var real_players = [{
  name: 'teddy',
  height: '5ft4',
  age: 1976,
  skills: 'slow, big belly'
},
{
  name: 'jim',
  height: '5ft10',
  age: 1976,
  skills: 'fast, big belly'
},{
  name: 'jumper',
  height: '5ft7',
  age: 1974,
  skills: 'good at free throws, big belly'
},{
  name: 'rock',
  height: '5ft',
  age: 1975,
  skills: 'slow, big belly'
}];

db.Player.remove({}, function(err, players){
  // code in here runs after all albums are removed
  db.Player.create(real_players, function(err, players){
    // code in here runs after all albums are created
    if (err) { return console.log('ERROR', err); }
    console.log("all players:", players);
    console.log("created", players.length, "players");
    process.exit();
  });
});
