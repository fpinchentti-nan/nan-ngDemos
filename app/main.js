var app = angular.module('demo', [ 'listDemo', 'scopeVariableDemo' ,'ui.router' ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
}]);
