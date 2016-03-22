angular.module('dicApp').controller('SearchController', SearchController);

SearchController.inject = [
    '$rootScope',
    '$scope',
    '$http',
    'parseData',

];

function SearchController($rootScope,$scope,$http,parseData) {


//     $scope.clear=function()
//    {
//            alert("clear");
//        $scope.searchText="";
//    }
//
    $scope.searchWord = function (word) {
        if (word == undefined) {
            $scope.NoInput = true;

            return;
        }
        else {
            $scope.showProgress = true;
            $scope.NoInput = false;

        }

        var url = "http://fanyi.youdao.com/openapi.do?keyfrom=momirror&key=357484575&type=data&doctype=json&version=1.1&q=" + word;
        $http.get(url)
            .success(function (response) {

                $scope.showProgress = false;
                parseData.parseJson(response);

                var basic = response.basic;

//             $scope.usphonetic = basic.us-phonetic;
//             $scope.ukphonetic = basic.uk-phonetic;
                $scope.usphonetic = basic.phonetic;
                $scope.ukphonetic = basic.phonetic;
                $scope.searchResult = basic.explains;
                $scope.hasResult = true;

                getAllWord.getAllData().then(function (data) {
                    var wordDatas = data;

                    $scope.words = data;
                });


            })
            .error(function (e) {
                alert('请求失败了');
                $scope.showProgress = false;
            });

    }
};
