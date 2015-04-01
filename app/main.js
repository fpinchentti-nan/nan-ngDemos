var app = angular.module('demo', [ 'bindOnceDemo' ,'ui.router' ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/bindOnceDemo');

}]);
