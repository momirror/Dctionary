angular.module('dicApp').controller('setController', setController);
    
setController.inject = [
                          '$rootScope',
                          '$scope',
                          'currentData',
                          ];
    
function setController($rootScope,$state,$scope,currentData) {

        
//        $scope.items=datas;
        var arr = ["导入生词","帮助"];
        $scope.items = arr;
//        alert("setCtrl+ "+currentData+" "+ arr);
//        $scope.items = currentData;
//        alert($scope.items);
//        alert(currentData[0]);
}
