/**
 * Created by msp on 2016/3/21.
 */

angular.module('dicApp').controller('WordDetailController', WordDetailController);

ListController.inject = [
    '$rootScope',
    '$scope',
    '$stateParams',
];

function WordDetailController($scope,$rootScope,$stateParams) {
    $rootScope.wordIndex =  $stateParams.index;


};