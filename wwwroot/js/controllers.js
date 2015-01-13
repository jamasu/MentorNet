/* Controllers */

var scotchControllers = angular.module('scotchControllers', []);

/* Add controllers here as needed */

scotchControllers.controller('mainController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = '';

        $rootScope.current = ['current', 'non', 'non', 'non', 'non'];
    }]);
scotchControllers.controller('aboutController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = 'aboutController';

        $rootScope.current = ['non', 'current', 'non', 'non', 'non'];
    }]);

scotchControllers.controller('serviceController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = 'serviceController';

        $rootScope.current = ['non', 'non', 'current', 'non', 'non'];
    }]);

scotchControllers.controller('contactController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = 'contactController';

        $rootScope.current = ['non', 'non', 'non', 'current', 'non'];
    }]);

scotchControllers.controller('partnersController', ['$scope', '$rootScope', function($scope, $rootScope) {
        // create a message to display in our view
        $scope.message = 'partnersController';
        
        $rootScope.current = ['non', 'non', 'non', 'non', 'current'];
    }]);

