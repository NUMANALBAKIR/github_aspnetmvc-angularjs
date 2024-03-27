'use strict';

(function (angular) {

    var app = angular.module('app');

    app.controller('TestController', ['$scope', '$rootScope', 'SharedDataService', function ($scope, $rootScope, SharedDataService) {

        $scope.n = 3;

        (function init() {
            SharedDataService.setSharedData({ key: 'value is: ' + $scope.n });
            $rootScope.$emit('dataShared'); 
        })();


        $scope.sendData = function () {
            SharedDataService.setSharedData({ key: 'value is: ' + $scope.n });
            $rootScope.$emit('dataShared'); 
        };

        $scope.increment = function () {
            $scope.n++;
            $scope.sendData();
        };

    }]);

})(angular);
