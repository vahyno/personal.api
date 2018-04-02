var db = require('./models');


var over_30_players = [{
  name: 'Misa Kvakin',
  height: '6ft3',
  yearOfBirth: 1976,
  skills: 'euro step, hook shot, three point shot'
},
{
  name: 'Eric Haus',
  height: '6ft5',
  yearOfBirth: 1974,
  skills: 'hook shot, three point, defence'
},{
  name: 'Josh Stern',
  height: '5ft7',
  yearOfBirth: 1977,
  skills: '3 point shooter, fast break'
},{
  name: 'Koala Bear',
  height: '6ft3',
  yearOfBirth: 1975,
  skills: 'anywhere shoter, ball handeling, defence'
},
{
  name: 'Baba Booey',
  height: '5ft10',
  yearOfBirth: 1958,
  skills: 'big theeth, slow, no defence'
},
{
name: 'Jim Bo',
height: '6ft2',
yearOfBirth: 1949,
skills: 'three throws, defence'
}];

db.Player.remove({}, function(err, players){
  // code in here runs after all players are removed
  db.Player.create(over_30_players, function(err, players){
    // code in here runs after all players are created
    if (err) { return console.log('ERROR', err); }
    console.log("all players:", players);
    console.log("created", players.length, "players");
    process.exit();
  });
});
