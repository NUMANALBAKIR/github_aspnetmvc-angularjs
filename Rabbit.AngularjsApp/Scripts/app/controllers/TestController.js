'use strict';

(function (angular) {

    var app = angular.module('app');

    app.controller('TestController', ['$scope', '$rootScope', 'SharedDataService', function ($scope, $rootScope, SharedDataService) {

        $scope.n = 3;
        let sendData = function () {
            SharedDataService.setSharedData({ key: $scope.n });
            $rootScope.$emit('dataShared'); 
        };
        $scope.increment = function () {
            $scope.n++;
            sendData();
        };


        // d3-
        // Function to dynamically load D3 v6.6 using Promise
        $scope.script = '';
        function loadD3v6() {
            return new Promise((resolve, reject) => {
                var script = document.createElement('script');
                script.src = 'https://d3js.org/d3.v6.min.js'; // URL to D3 v6.6
                script.onload = () => resolve(d3); // Resolve the promise with d3 v6
                script.onerror = reject; // Reject the promise on error
                document.head.appendChild(script);
            });
        }


        $scope.myInit = function () {
            sendData();

            loadD3v6().then(d3v6 => {
                SharedDataService.setScript({ key: d3v6 });
                $rootScope.$emit('script'); 
            }).catch(error => {
                console.error('Failed to load D3 v6:', error);
            });

        }


    }]);


})(angular);
