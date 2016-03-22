var myApp = angular.module("dicApp",['ionic']);

myApp.config(function($stateProvider,$urlRouterProvider) {

    //$urlRouterProvider.when("","/home");
    //alert("hhh");
    $stateProvider
        .state('home', {
            url:'/home',
            templateUrl: 'tabs.html',
            abstract: true,
            controller:'TabsController'

        });



});

//var myApp = angular.module("dicApp",['ionic'])
//    .config(tabsConfig);
//
//tabsConfig.$inject = ['$stateProvider','$urlRouterProvider'];
//
//function tabsConfig($stateProvider,$urlRouterProvider) {
//
//    $urlRouterProvider.when("","/home");
//    //alert("hhh");
//    $stateProvider
//        .state('home', {
//        url:'/home',
//        templateUrl: 'tabs.html',
//        abstract: true,
//        controller:'TabsController'
//
//    });
//
//};
//
//
//var myApp = angular.module("dicApp",['ionic']);
//
//
//myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
//    $urlRouterProvider.when("", "/tabs/search");
//
//    $stateProvider
//        .state("tabs",
//            {
//                url: "/tabs",
//                templateUrl: "tabs.html",
//            })
//        .state("tabs.Search",
//            {
//                url: "/search",
//                views: {
//                    'home-tab': {
//                        templateUrl: "search.html",
//                        controller: "SearchController"
//                    }
//                }
//            });
//}])