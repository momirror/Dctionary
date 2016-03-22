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

    alert("ListController");
//    getAllWord.getAllData().then(function(data){
//        var wordDatas = data;
//        $scope.words = data;
//    });
//
//	 $rootScope.nav_title="单词本";
//
//	 $scope.show="true";
//
//     $scope.clear=function()
//    {
//            alert("clear");
//        $scope.searchText="";
//    }
//
//	 $scope.searchWord=function(word)
//	 {
//        if(word == undefined)
//        {
//            $scope.NoInput = true;
//
//            return;
//        }
//        else
//        {
//            $scope.showProgress = true;
//            $scope.NoInput = false;
//
//        }
//
//	 	var url = "http://fanyi.youdao.com/openapi.do?keyfrom=momirror&key=357484575&type=data&doctype=json&version=1.1&q=" + word;
//	 	 $http.get(url)
//    .success(function(response) {
//
//             $scope.showProgress = false;
//             parseData.parseJson(response);
//
//             var basic = response.basic;
//
////             $scope.usphonetic = basic.us-phonetic;
////             $scope.ukphonetic = basic.uk-phonetic;
//             $scope.usphonetic = basic.phonetic;
//             $scope.ukphonetic = basic.phonetic;
//             $scope.searchResult = basic.explains;
//             $scope.hasResult = true;
//
//             getAllWord.getAllData().then(function(data){
//                                          var wordDatas = data;
//
//                                          $scope.words = data;
//                                          });


 //            })
 //   .error(function(e){
 //alert('请求失败了');
 //});

};