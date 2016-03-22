/**
 * Created by msp on 2016/3/22.
 */
var myApp = angular.module("dicApp");
myApp.config(function($stateProvider,$urlRouterProvider) {

    //$urlRouterProvider.when("","/home/list");

    $stateProvider
        .state("list",{
            parent:'home',
            url:"/list",
            views: {
                'list-tab': {
                    templateUrl: "js/module/list/list.html",
                    controller:'ListController',

                }
            }
        });
});
