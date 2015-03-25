angular.module('scopeVariableDemo', ['ui.router']).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.

    state('scopeVariableDemo', {
        url:'/scopeVariableDemo',
        templateUrl:  'components/scopeVariableDemo/scopeVariableDemo.html',
        controller:   'scopeVariableDemoController'
    });

}]);
