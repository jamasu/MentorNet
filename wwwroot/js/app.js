'use strict';

/* App Module */

var scotchApp = angular.module('scotchApp', [
  'ngRoute',
  'scotchControllers'
  ]);

scotchApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller  : 'mainController'
    }).
    when('/contact', {
      templateUrl : 'partials/contact.html',
      controller  : 'contactController'
    }).
    when('/service', {
      templateUrl : 'partials/service.html',
      controller  : 'serviceController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }]);


/*
scotchApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/premierLeague', {
        templateUrl: 'partials/premier-league.html',
        controller: 'LeagueListCtrl'
      }).
      otherwise({
        redirectTo: '/premierLeague'
      });
  }]);
*/