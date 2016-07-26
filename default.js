// var Client = require('mongodb').MongoClient;
// var express = require('express');
// var server = express();



// server.use(express.static('/'));

var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = [];

function home() {
  var vm = this;
  vm.todos = [
    {name: "Shower", checked: false},
    {name: "Eat", checked: false}
  ]

  vm.message = "To Do List:";

}
