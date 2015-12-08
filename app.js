'use strict';

var express = require('express');

var app = express();
var path    = require('path');

function getPath(newPath) {
  return path.join(__dirname + '/' + newPath);
}
function getView(viewName) {
  return getPath('views/' + viewName);
}

app
  .get('/', function (req, res) {
    res.status(200).sendFile(getView('index.html'));
  })
  .get('/400', function (req, res) {
    res.status(400).sendFile(getView('400.html'));
  })
  .get('/401', function (req, res) {
    res.status(401).sendFile(getView('401.html'));
  })
  .get('/403', function (req, res) {
    res.status(403).sendFile(getView('403.html'));
  })
  .get('/404', function (req, res) {
    res.status(404).sendFile(getView('404.html'));
  })
  .get('/405', function (req, res) {
    res.status(405).sendFile(getView('405.html'));
  })
  .get('/406', function (req, res) {
    res.status(406).sendFile(getView('406.html'));
  })
  .get('/407', function (req, res) {
    res.status(417).sendFile(getView('407.html'));
  })
  .get('/408', function (req, res) {
    res.status(408).sendFile(getView('408.html'));
  })
  .get('/409', function (req, res) {
    res.status(409).sendFile(getView('409.html'));
  })
  .get('/410', function (req, res) {
    res.status(410).sendFile(getView('410.html'));
  })
  .get('/412', function (req, res) {
    res.status(412).sendFile(getView('412.html'));
  })
  .get('/413', function (req, res) {
    res.status(413).sendFile(getView('413.html'));
  })
  .get('/420', function (req, res) {
    res.status(420).sendFile(getView('420.html'));
  })
  .get('/421', function (req, res) {
    res.status(421).sendFile(getView('421.html'));
  })
  .get('/429', function (req, res) {
    res.status(429).sendFile(getView('429.html'));
  })
  .get('/500', function (req, res) {
    res.status(500).sendFile(getView('500.html'));
  })
  .get('/503', function (req, res) {
    res.status(503).sendFile(getView('503.html'));
  })
  .get('/520', function (req, res) {
    res.status(520).sendFile(getView('520.html'));
  })

  .get('/static/*', (req, res) => {
    res.sendFile(getPath('static/' + req.params[0]));
  })
  .get('/img/*', (req, res) => {
    res.sendFile(getPath('img/' + req.params[0]));
  });

var server = app.listen((process.env.PORT || 5000), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});