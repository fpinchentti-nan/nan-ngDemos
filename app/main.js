var app = angular.module('demo', [ 'interpolateDemo' ,'ui.router' ]);

app.config(function($interpolateProvider) {
      $interpolateProvider.startSymbol('(<_<)');
      $interpolateProvider.endSymbol('(~_~)');
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/interpolateAndSwitchDemo');

}]);
