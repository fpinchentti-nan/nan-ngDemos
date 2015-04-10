var app = angular.module('demo', [ 'promisesChainingDemo' ,'ui.router' ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/promises-chaining-demo');

}]);
