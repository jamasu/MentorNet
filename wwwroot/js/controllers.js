/* Controllers */

var scotchControllers = angular.module('scotchControllers', []);

//TODO use service instead of http
/*
scotchControllers.controller('LeagueListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://www.corsproxy.com/api.football-data.org/alpha/soccerseasons/354/leagueTable').
      success(function(data){
        $scope.league = data;
        //TODO format the array into a cann table here
        console.log('success');
        console.log(data);
      }).
      error(function(data, status){
        console.log('error');
        console.log(status);
      });
  }]);
*/

scotchControllers.controller('mainController', ['$scope', function($scope) {
        // create a message to display in our view
        $scope.message = 'mainController';
      }]);

scotchControllers.controller('aboutController',['$scope', function($scope) {
        // create a message to display in our view
        $scope.message = 'aboutController';
      }]);

scotchControllers.controller('contactController',['$scope', function($scope) {
        // create a message to display in our view
        $scope.message = 'contactController';
      }]);

scotchControllers.controller('serviceController', ['$scope', function($scope) {
        // create a message to display in our view
        $scope.message = 'serviceController';
      }]);
