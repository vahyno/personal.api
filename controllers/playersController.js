var db = require("../models");

// var sample_players = [{
//   name: 'teddy',
//   height: '5ft4',
//   age: 1976,
//   skills: 'slow, big belly'
// },
// {
//   name: 'jim',
//   height: '5ft10',
//   age: 1976,
//   skills: 'fast, big belly'
// },{
//   name: 'jumper',
//   height: '5ft7',
//   age: 1974,
//   skills: 'good at free throws, big belly'
// },{
//   name: 'rock',
//   height: '5ft',
//   age: 1975,
//   skills: 'slow, big belly'
// }];
//
// // GET /api/players
// function index(req, res) {
//   // send back all albums as JSON
//   res.json(sample_players);
//
// }
// GET /api/
// function index(req, res) {
//   // send back all places as JSON
// }
//GET /api/
function index(req, res) {
  // send back all albums as JSON
  db.Player.find({})
  		  .exec(function (err, player){
  			if (err) {
		        res.status(500).send(err);
		        return;
		    }
		    res.json(player);
  			});
  }


// POST /api/players
function create(req, res) {
  // create an album based on request body and send it back as JSON
  console.log(req.body);

  db.Player.create(req.body, function(err, player) {
    if (err) { console.log('error', err); }
    res.json(player);
  });
}





// GET /api/plyers/:placeId
function show(req, res) {
  // find one place by id and send it back as JSON
}

// DELETE /api/places/:placeId
function destroy(req, res) {
  // find one place by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/places/:placeId
function update(req, res) {
  // find one place by id, update it based on request body,
  // and send it back as JSON
}


module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
