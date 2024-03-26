'use strict';

(function (angular) {
    // Ensure 'app' module is already declared elsewhere with angular.module('app', []);
    var app = angular.module('app');

    app.controller('TestController', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.n = 3;


        $scope.sendData = function () {
            $rootScope.$emit('dataShared', { key: 'value is: ' + $scope.n });
        };

        $scope.increment = function () {
            $scope.n++;
            $scope.sendData();
        };


        (function init() {
            $scope.sendData();
        })();



    }]);
})(angular);
