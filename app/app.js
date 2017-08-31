'use strict';

// Declare app level module which depends on views, and components
angular.module('jobApp', [
  'ngRoute',
  'jobApp.jobs',
  'jobApp.view2',
  'jobApp.employer',
  'jobApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!')
  $routeProvider.otherwise({redirectTo: '/jobs'});
}]);
