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

        $scope.myInit = function () {
            sendData();
        };


    }]);


})(angular);
