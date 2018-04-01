//requirements
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');
//middleware
//serve static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.get('/', function (req, res){
  // res.send('hello world to personal API')
  res.sendFile('views/index.html', {root: __dirname});
});

app.get('/api/profile', function(req, res){
  res.json({
    name:"Michal",
    githubUserName: "vahyno",
    githubLink: "https://github.com/vahyno",
    currentCity: "Berkeley"
  })
});

app.get('/api', controllers.api.index);

app.get('/api/players', controllers.players.index);

app.post('/api/players', controllers.players.create);



// server start
app.listen(3000, function(){
  console.log('HTTP server listening at localhost:3000');
});
