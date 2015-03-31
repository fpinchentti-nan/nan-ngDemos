angular.module('listDemo', ['ui.router']).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.

    state('listDemo', {
        url:'/listDemo',
        templateUrl:  'components/listDemo/listDemo.html',
        controller:   'ListDemoController'
    });

}]);
