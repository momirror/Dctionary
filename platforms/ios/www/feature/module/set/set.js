/**
 * Created by msp on 2016/3/21.
 */
var myApp = angular.module("dicApp");
myApp.config(function($stateProvider,$urlRouterProvider) {

    //$urlRouterProvider.when("","/home/set");

    $stateProvider

        .state("set",{
            parent:'home',
            url:"/set",
            views: {
                'set-tab': {
                    templateUrl: "feature/module/set/set.html",
                    controller:'setController',
                    resolve:
                    {
                        currentData:setItems()
                    }
                }
            }
        })
        //.state("set.help",{
        //    url:"/help/:index",
        //    parent:'home',
        //    views: {
        //        'set-tab': {
        //            templateUrl: function ($stateParams){
        //
        //                if($stateParams.index == 0)
        //                {
        //                    return "sdf.html";
        //                }
        //                else
        //                {
        //                    return "feature/module/set/help/help.html";
        //                }
        //            },
        //            controller:"HelpController",
        //
        //        }
        //    }
        //
        //})
    ;


        //.state("set",{
        //    parent:'home',
        //    url:"/set",
        //    abstract: true,
        //})
        //.state("set.menu",{
        //    url:"/menu",
        //    views: {
        //        'set-tab': {
        //            templateUrl: "feature/module/set/set.html",
        //            controller:'setController',
        //            resolve:
        //            {
        //                currentData:setItems()
        //            }
        //        }
        //    }
        //});

    function setItems()
    {
        return ['$q',function($q)
        {
            //alert("setItems");
            var dfd = $q.defer();
            dfd.resolve(["导入生词","帮助"]);
            return dfd.promise;
        }]
    };
});
