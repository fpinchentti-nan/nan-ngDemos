angular.module('listBindOnceDemo', ['ui.router']).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.

    state('listBO', {
        url:'/listBO',
        templateUrl:  'components/listBindOnce/listBindOnce.html',
        controller:   'ListBOController'
    });

}]);
