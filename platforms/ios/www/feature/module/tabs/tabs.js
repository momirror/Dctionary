var myApp = angular.module("dicApp",['ionic']);

myApp.config(function($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: 'feature/module/tabs/tabs.html',
            abstract: true,
            controller:'TabsController'

        });
});

