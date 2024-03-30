'use strict';

(function (angular) {
    var app = angular.module('app');
    app.controller('WelcomeController', ['$scope', function ($scope) {        

        $scope.form = {
            YEAR: '',
            MONTHFROM: '',
            MONTHTO: '',
            STOGRPCODE: '',
            AREA: ''
        };

        // Initially set the YEAR value
        // $scope.form.YEAR = '2019';

        $scope.years = ["2019", "2020", "2021"];

        $scope.changedYear = function () {
            $scope.form.YEAR = $scope.selectedItem;
            alert('New value selected: ' + $scope.form.YEAR);
        };



    }]);
})(angular);
