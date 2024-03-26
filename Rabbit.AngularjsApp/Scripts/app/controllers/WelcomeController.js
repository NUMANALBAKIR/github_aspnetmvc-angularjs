'use strict';

(function (angular) {
    var app = angular.module('app');
    app.controller('WelcomeController', ['$scope', function ($scope) {

            
        $scope.dv = d3.version;

        console.log('--- D3 version inside Welcome controller:', d3.version);

    }]);
})(angular);
