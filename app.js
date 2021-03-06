// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

var quotes = require('./math_quotes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(express.bodyParser());

app.get('/', function(req, res) {
  res.render('compose', {host: req.get('host')});
});

app.get('/view', function(req, res) {
  res.render('view', {host: req.get('host')});
});

app.get('/about', function(req, res) {
  res.render('about', {host: req.get('host')});
});

// Set server port
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log('server is listening on ' + port);
});
