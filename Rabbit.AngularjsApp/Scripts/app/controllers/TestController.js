'use strict';

(function (angular) {

    var app = angular.module('app');

    app.controller('TestController', ['$scope', '$rootScope', 'SharedDataService', function ($scope, $rootScope, SharedDataService) {

        $scope.n = 3;
        let sendData = function () {
            SharedDataService.setSharedData({ key: 'value is: ' + $scope.n });
            $rootScope.$emit('dataShared'); 
        };


        (function init() {
            sendData();
        })();

        $scope.increment = function () {
            $scope.n++;
            sendData();
        };

    }]);

})(angular);
