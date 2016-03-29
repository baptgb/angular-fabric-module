angular.module('fabric', []).factory('fabric', ['$window', function($window) {
    return $window.fabric; // assumes fabric has already been loaded on the page
}]);
