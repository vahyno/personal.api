//requirements
var express = require('express');
var app = express();

//middleware
//serve static files
app.use(express.static('public'));


//routes
app.get('/', function (req, res){
  // res.send('hello world to personal API')
  res.sendFile('views/index.html', {root: __dirname});
});



// server start
app.listen(3000, function(){
  console.log('HTTP server listening at localhost:3000');
});
