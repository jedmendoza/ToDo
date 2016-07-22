var app = angular.module('todo', []);

app.controller('homeController', home);

home.$inject = []

function home() {
  var vm = this;
  vm.todos = [
    {name: "Shower"},
    {name: "Eat"}
  ]

  vm.message = "To Do List:";

}
