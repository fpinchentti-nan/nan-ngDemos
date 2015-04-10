angular.module('qAllDemo', ['ui.router']).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.

    state('qAllDemo', {
        url:'/qAllDemo',
        templateUrl:  'components/qAllDemo/qAllDemo.html',
        controller:   'qAllDemoController'
    });

}]);
