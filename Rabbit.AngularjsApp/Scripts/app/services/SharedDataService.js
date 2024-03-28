'use strict';

(function (angular) {
    var app = angular.module('app');
    app.service('SharedDataService', function () {

        var sharedData = {};
        this.getSharedData = function () {
            return sharedData;
        };
        this.setSharedData = function (data) {
            sharedData = data;
        };


        var script = {};
        this.getScript = function () {
            return script;
        };
        this.setScript = function (data) {
            script = data;
        };


    });

})(angular);
