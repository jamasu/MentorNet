// script.js

  var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })

 			.when('/service', {
                templateUrl : 'pages/service.html',
                controller  : 'serviceController'
            });
         
    });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = '';
    });

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = '';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = '';
    });

    scotchApp.controller('serviceController', function($scope) {
        $scope.message = '';
    });

