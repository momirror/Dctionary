/**
 * Created by msp on 2016/3/21.
 */
var myApp = angular.module("dicApp",['ionic']);
myApp.config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state("tabs.Set",{
            url:"/set",
            views: {
                'set-tab': {
                    templateUrl: "set.html",
                    controller:'setController',
                    resolve:
                    {
                        currentData:setItems()
                    }
                }
            }
        });

    function setItems()
    {
        return ['$q',function($q)
        {
            var dfd = $q.defer();
            dfd.resolve(["导入生词","帮助"]);
            return dfd.promise;
        }]
    };
});
