'use strict';

(function (angular) {

    // Ensure 'app' module is already declared elsewhere with angular.module('app', []);
    var app = angular.module('app');

    // Define a service for shared data
    app.service('SharedDataService', function () {
        var sharedData = {};

        return {
            getData: function () {
                return sharedData;
            },
            setData: function (data) {
                sharedData = data;
            }
        };
    });


    app.controller('TestController', ['$scope', '$rootScope', 'SharedDataService', function ($scope, $rootScope, SharedDataService) {

        $scope.n = 3;

        (function init() {
            SharedDataService.setData({ key: 'value is: ' + $scope.n });
            $rootScope.$emit('dataShared'); 
        })();


        $scope.sendData = function () {
            SharedDataService.setData({ key: 'value is: ' + $scope.n });
            $rootScope.$emit('dataShared'); 
        };

        $scope.increment = function () {
            $scope.n++;
            $scope.sendData();
        };

    }]);

})(angular);
