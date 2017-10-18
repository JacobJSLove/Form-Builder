angular
.module('app', ['ui.router','LocalStorageModule'])
.config(function ($stateProvider ,$urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider){
 // $routeProvider.caseInsensitiveMatch = true; /* Students work like students */
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlRouterProvider.otherwise("templates/home");
  $stateProvider
    .state("home", {
      url: "/templates/home",
      templateUrl:"templates/home.html",
      controller:"homeController",
      controllerAs: "homeCtrl"
    })
    .state("config", {
      url: "/templates/config",
      templateUrl:"templates/config.html",
      controller:"configController",
      controllerAs: "configCtrl"
    })
  // $locationProvider.hashPrefix('');
})
.controller('homeController', function($scope){
    $scope.delete = function(data) {
        data.nodes = [];
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };
    $scope.tree = [{name: "Node", nodes: []}];
  })
.controller('configController', function(){
  
}) 
