/**
 * Created by faith on 8/30/17.
 */
(function() {
'use strict';
    angular.module('jobApp.jobs', [
        'ngRoute',

    ])

        .config(['$routeProvider', function ($routeProvider,$locationProvider) {

            $routeProvider
                .when('/jobs', {
                templateUrl: 'jobs/jobs.html',
                controller: 'JobsController as vm'
            })
                .when('/job-details', {
                    templateUrl: 'jobs/views/job-details/job-details-view.html',
                    controller: 'JobDetailsController as vm'
            });
        }]);


})();