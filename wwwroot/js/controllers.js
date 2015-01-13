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

function setCurrent(c) {
        var myArray = new Array(5);
        myArray[0] = "A";
        myArray[1] = "B";
        myArray[2] = "C";
        myArray[3] = "D";
        return myArray;
   }

scotchControllers.controller('mainController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = '';

        $rootScope.current = new Array();
        $rootScope.current[0] = 'current';
        $rootScope.current[1] = 'non';
        $rootScope.current[2] = 'non';
        $rootScope.current[3] = 'non';
        $rootScope.current[4] = 'non';

      }]);
scotchControllers.controller('aboutController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = 'aboutController';

        $rootScope.current[0] = 'non';
        $rootScope.current[1] = 'current';
        $rootScope.current[2] = 'non';
        $rootScope.current[3] = 'non';
        $rootScope.current[4] = 'non';
      }]);

scotchControllers.controller('serviceController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = 'serviceController';

        $rootScope.current[0] = 'non';
        $rootScope.current[1] = 'non';
        $rootScope.current[2] = 'current';
        $rootScope.current[3] = 'non';
        $rootScope.current[4] = 'non';

      }]);

scotchControllers.controller('contactController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = 'contactController';

        $rootScope.current[0] = 'non';
        $rootScope.current[1] = 'non';
        $rootScope.current[2] = 'non';
        $rootScope.current[3] = 'current';
        $rootScope.current[4] = 'non';

      }]);

scotchControllers.controller('partnersController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = 'partnersController';

        $rootScope.current[0] = 'non';
        $rootScope.current[1] = 'non';
        $rootScope.current[2] = 'non';
        $rootScope.current[3] = 'non';
        $rootScope.current[4] = 'current';
      }]);

