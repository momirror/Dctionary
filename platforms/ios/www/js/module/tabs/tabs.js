/**
 * Created by msp on 2016/3/21.
 */

var myApp = angular.module("dicApp",['ionic']);

myApp.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.when("","/tabs");
    //alert("hhh");
    $stateProvider
    //    .state('tabs', {
    //    templateUrl: 'js/module/tabs/tabs.html',
    //    abstract: true,
    //    controller:function(){
    //        alert("aaa");
    //    }
    //});
    .state("tabs",
        {
            url:"/tabs",
            templateUrl:"js/module/tabs/tabs.html",
            controller:function(){
                        alert("aaa");
                    }
        })
});