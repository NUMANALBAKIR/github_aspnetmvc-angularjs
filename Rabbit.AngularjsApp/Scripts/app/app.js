(function (angular) {
    var app = angular.module('app', ['ngRoute']);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'WelcomeController',
                templateUrl: '/Template/Welcome',
            }).when('/test', {
                controller: 'TestController',
                templateUrl: '/Template/Test',
            }).otherwise({
                redirectTo: '/'
            });
    }]);
})(angular);
