angular
.module('dicApp')
.controller('setController', setController);

setController.inject = [
                        '$rootScope',
                        '$scope',
                        'ionic',
                        ];

function setController($rootScope, $state,$scope) {
    
    $scope.items=["导入生词","帮助"];
}
