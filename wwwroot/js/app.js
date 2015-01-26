'use strict';

/* App Module */

var scotchApp = angular.module('scotchApp', [
  'ngRoute',
  'scotchControllers'
  ]);

/* Configure routing here as needed */

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
     when('/practical', {
      templateUrl : 'partials/practical.html',
      controller  : 'practicalController'
    }).
      when('/projects', {
      templateUrl : 'partials/projects.html',
      controller  : 'projectsController'
    }).
    otherwise({
      redirectTo: '/home'
    });
  }]);