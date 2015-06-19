var debug = require('debug')('Aurelia-App');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var paths = require('./paths');
var api = require('./server/routes/api');

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use('/system-config.js', function (req, res) { res.sendFile(path.join(__dirname, 'config.js'));});
app.use('/jspm_packages', express.static(path.join(__dirname, 'jspm_packages')));
app.use(express.static(path.join(__dirname, paths.output)));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);
app.use(cookieParser());
app.use('/api', api);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
});

app.set('port', 4000);

var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});
