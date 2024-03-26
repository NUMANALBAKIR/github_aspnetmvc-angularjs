'use strict';

(function (angular) {
    var app = angular.module('app');
    app.controller('TestController', ['$scope', function ($scope) {

        $scope.name = 'numan';

        $scope.v = d3.version;

    }]);
})(angular);
