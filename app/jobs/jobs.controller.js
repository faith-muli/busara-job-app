(function() {
'use strict';

angular.module('jobApp')
    .controller('JobsController', JobsController);


    function JobsController($http, $location, $log) {

        var vm = this;

        //data
        vm.jobs={};
        //dummydata



        //methods
         vm.fetchData        = fetchData;
         vm.viewJobDetails   = viewJobDetails;


        init();
        function init() {
            vm.fetchData();

        }

        /*fetching data from the jobs api in this case dummy data*/
        function fetchData() {
            $http({method: 'GET', url:'data/jobs.json'})
                .then(
                    function(response) {
                        vm.jobs = response.data;
                        console.log(vm.jobs);
                    },
                    function(error) {
                        Console.warn('An error occured');
                    }
                );
        }

        function viewJobDetails(){
           $location.path('/job-details');

        }







    }
})();