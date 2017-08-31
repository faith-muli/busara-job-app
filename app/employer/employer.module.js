/**
 * Created by faith on 8/31/17.
 */
(function() {
'use strict';
angular.module('jobApp.employer', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/employer', {
        templateUrl: 'employer/employer-view.html',
        controller: 'EmployerController'
    });
}]);
})();
