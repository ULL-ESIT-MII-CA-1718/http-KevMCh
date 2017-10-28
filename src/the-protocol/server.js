var express = require('express')
var app = express()

// Serve static files
app.use(express.static('.')); // http://expressjs.com/api.html#app.use#

app.set('port', (process.env.PORT || 8080));

// Instruct the app to use the `bodyParser()` middleware for all routes
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

app.get('/get', function(req, res){
  console.log(req.query);
  let result = Object.assign(req.query, {result: 200});
  res.send(result);
});

app.post('/', function(req, res){
  var msg = req.body.msg;
  console.log("Message: " + msg);

  // res.header sets the response’s HTTP header field to value.
  res.header({
    type: 'post',
    "subject": "Computación Avanzada 17/18"
  });
  var result = 10;

  res.send({msg: result});
});
