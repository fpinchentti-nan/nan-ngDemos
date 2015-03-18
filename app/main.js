var app = angular.module('demo', [ 'listDemo', 'listBindOnce', 'ui.router' ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/listDemo');

}]);
