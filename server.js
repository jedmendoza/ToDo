var Client = require('mongodb').MongoClient;
var express = require('express');
var server = express();
var url = 'http://mongodb:27017/todolist';
// var angular = require('angular');

server.use(express.static('/'));

server.get('/todo', function(req, res) {
  res.send('route works')
})

server.listen(8080);
