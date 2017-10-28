var express = require('express')
var app = express()
var util = require('util');

// https://nodejs.org/api/path.html
var path = require('path');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
// Set the view engine to ejs
app.set('view engine', 'ejs'); // http://expressjs.com/api.html#app.set

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'  '

// Serve static files
app.use(express.static('.')); // http://expressjs.com/api.html#app.use#
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

app.get('/message.html', function(req, res){
  console.log("req.query = " + util.inspect(req.query));
  let context = {};
  Object.assign(context, req.query, {title: "EJS. Chapter 17: HTTP. Browsers and HTTP"})
  res.render('response', context);
});

app.post('/message.html', function(req, res){
  console.log("req.body = " + util.inspect(req.body));
  let context = {};
  Object.assign(context, req.body, {title: "EJS. Chapter 17: HTTP. Browsers and HTTP"})
  res.render('response', context);
});
