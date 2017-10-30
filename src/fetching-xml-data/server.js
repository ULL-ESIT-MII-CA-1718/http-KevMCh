var express = require('express')
var app = express()
var util = require('util');

// https://nodejs.org/api/path.html
var path = require('path');

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'  '

// Serve static files
app.use(express.static(__dirname)); // http://expressjs.com/api.html#app.use#
app.use(expressLayouts);

app.set('port', (process.env.PORT || 8080));

// Instruct the app to use the `bodyParser()` middleware for all routes
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});
