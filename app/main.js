var app = angular.module('demo', [ 'listBindOnceDemo' ,'ui.router' ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/listBO');

}]);
