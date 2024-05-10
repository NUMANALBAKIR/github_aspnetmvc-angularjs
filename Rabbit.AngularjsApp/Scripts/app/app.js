(function (angular) {
    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider

            .when('/', {
                controller: 'WelcomeController',
                templateUrl: '/Template/Welcome',
            })

            .when('/test', {
                controller: 'TestController',
                templateUrl: '/Template/Test',
            })

            .when('/test2', {
                //controller: 'Tesht2C/ontroller',
                templateUrl: '/Test2', // determines the .cs controller
            })

            .when('/myalu', {
                templateUrl: '/Alu/myalu', // determines the .cs controller
            })


            .otherwise({
                redirectTo: '/'
            });

    }]);
})(angular);
