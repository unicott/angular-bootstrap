'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).

    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1',
        {
            controller:'MyCtrl1',
            templateUrl:'partials/partial1.html'
        });
    $routeProvider.when('/view2',
        {
            controller:'MyCtrl2',
            templateUrl:'partials/partial2.html'

        });
    $routeProvider.otherwise({redirectTo:'/view1'});
}]);
