'use strict';

(function (angular) {
    var app = angular.module('app');

    app.controller('_PartialController', ['$scope', function ($scope) {

        $scope.pn = 'data from partial view';


    }]);
})(angular);
