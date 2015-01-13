'use strict';

/* App Module */

var scotchApp = angular.module('scotchApp', [
  'ngRoute',
  'scotchControllers'
  ]);

scotchApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'partials/home.html',
      controller  : 'mainController'
    }).
    when('/about', {
      templateUrl : 'partials/about.html',
      controller  : 'aboutController'
    }).
    when('/service', {
      templateUrl : 'partials/service.html',
      controller  : 'serviceController'
    }).
    when('/contact', {
      templateUrl : 'partials/contact.html',
      controller  : 'contactController'
    }).
    when('/partners', {
      templateUrl : 'partials/partners.html',
      controller  : 'partnersController'
    }).
    otherwise({
      redirectTo: '/home'
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