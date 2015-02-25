var app = angular.module('plunker', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'todos.html',
      controller: 'MainCtrl'
    });
}]);

app.factory('Todos', function() {
  return [
    { name: 'Master HTML/CSS/Javascript',
      completed: true},
    { name: 'Learn AngularJS',
      completed: false},
    { name: 'Build NodeJS backend',
      completed: false},
    { name: 'Get started with ExpressJS',
      completed: false},
    { name: 'Setup MongoDB database',
      completed: false},
    { name: 'Be awesome!',
      completed: false}
  ];
});

app.controller('MainCtrl', ['$scope','Todos',function($scope,Todos) {
  $scope.name = 'World';
  $scope.todos = Todos;
  
}]);
