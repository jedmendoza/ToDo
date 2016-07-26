var express = require('express');
var server = express();

var Client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/todo';

// var bodyParser = require('body-parser').json();


server.use(express.static('/'));

server.get('/:id', function(req, res) {
  Client.connect(url, function(error, db) {
    var list = db.collection('list');
    list.find({ id: req.params.id})
    .toArray(function(error, documents) {
      console.log(documents);
      res.send(documents);
      db.close()
    })

  })
});

server.post('/:id/:term', function(req, res) {
  Client.connect(url, function(error, db) {
    var list = db.collection('list');
    list.insert({
      id: req.params.id,
      term: req.params.term
    }, function(error, result) {
      console.log(result)
      res.send(result);
      db.close()
    })
  });
});

server.delete('/:id', function(req, res) {
  Client.connect(url, function(error, db) {
    var list = db.collection('list');
    list.deleteOne({
      id: req.params.id
    }, function(error, result) {
      console.log(result);
      res.send(result);
      db.close()
    })
  })
});



server.listen(8080);
