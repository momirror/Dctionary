/**
 * Created by msp on 2016/3/21.
 */

angular.module('dicApp').controller('ListController', ListController);

ListController.inject = [
    '$rootScope',
    '$scope',
    'getAllWord',
];

function ListController($scope,$rootScope,getAllWord) {

    getAllWord.getAllData().then(function(data){

        var wordDatas = data;
        $rootScope.words = data;
    });

//     $scope.clear=function()
//    {
//            alert("clear");
//        $scope.searchText="";
//    }
//

};