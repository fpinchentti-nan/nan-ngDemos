angular.module('interpolateDemo', ['ui.router']).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.

    state('demo', {
        url:'/interpolateAndSwitchDemo',
        templateUrl:  'components/interpolate/interpolate.html',
        controller:   'interpolateDemoController'
    });

}]);
