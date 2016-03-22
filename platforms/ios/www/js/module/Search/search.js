
/**
 * Created by msp on 2016/3/21.
 */
var myApp = angular.module("dicApp");
myApp.config(function($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.when("","/home/search");

    $stateProvider
        .state("search",{
            parent:'home',
            url:"/search",
            views: {
                'search-tab': {
                    templateUrl: "js/module/search/search.html",
                    controller:'SearchController',

                }
            }
        });
})
    .service("parseData",function()
    {
        this.parseJson=function(jsonData)
        {
            alert("parse data");
            var exec = cordova.require('cordova/exec');
            exec(null,null,"DataPlugin","parseData",[jsonData]);
        }
    });

