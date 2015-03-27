var app = angular.module('demo', [ 'scopeVariableDemo' ,'ui.router' ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/scopeVariableDemo');

}]);
