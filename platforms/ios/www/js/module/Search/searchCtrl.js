angular.module('dicApp').controller('SearchController', SearchController);

SearchController.inject = [
    '$rootScope',
    '$scope',
];

function SearchController($rootScope,$scope) {

    alert("SearchController");
}
