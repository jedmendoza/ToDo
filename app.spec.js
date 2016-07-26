var assert = require('chai').assert;
var request = require('request');

describe('Test the REST API', function() {
  before(function(done) {
    var Client = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/todo';

    Client.connect(url, function(error, db) {
      var list = db.collection('list');
      list.insertMany([
        {id: 57235792384, term: 'Do this Firsrt'},
        {id: 98374983912, term: 'Do this Second'},
        {id: 98127381231, term: 'Do this Last'}
      ], function(error, result) {
        db.close();
        done();
      })
    })
  });


  describe('POST', function() {
    it('expects that you can create a post', function(done) {
      request({
        url: 'http://localhost:8080/',
        method: 'POST'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done()
      })
    })
  });

  describe('POST', function() {
    it('lets you create an item', function(done) {
      request({
        url: 'http://localhost:8080/123456/term',
        method: 'POST'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      })
    })
  })
});
