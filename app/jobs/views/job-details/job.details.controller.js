/**
 * Created by faith on 8/31/17.
 */
(function() {
    'use strict';
    angular
        .module('jobApp')
        .controller('JobDetailsController', JobDetailsController);

    function JobDetailsController( $routeParams, $http) {
        var vm = this;

        //data
        vm.jobDetails = $routeParams;

        //methods
        vm.fetchData   = fetchData;


        init();

        function init() {
            fetchData();


        }

        function fetchData() {
           var id= $routeParams.id -1;

            $http(
                {method: 'GET',
                 url:'data/jobs.json'})
                .then(
                    function(response) {
                        vm.jobs = response.data;
                        vm.selectedData = vm.jobs.jobs[id];
                    },
                    function(error) {
                        Console.warn('An error occured');
                    }
                );
        }


    }
})();