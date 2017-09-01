/**
 * Created by faith on 9/1/17.
 */
(function () {
    'use strict';

    angular
        .module('jobApp')
        .factory('JobsService', JobsService);

    /** @ngInject */
    function JobsService($http, $log, $q) {
        var service = {

            getJobsData:getJobsData
        };



        function getJobsData() {
            $http({method: 'GET', url:'data/jobs.json'})
            .then(
                function(response) {
                    return response.data;


                },
                function(error) {
                    Console.warn('An error occured');
                }
            );


        }
        return service;

    }

})();
