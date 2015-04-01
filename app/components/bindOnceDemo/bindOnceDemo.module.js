angular.module('bindOnceDemo', ['ui.router']).

config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.

    state('bindOnceDemo', {
        url:'/bindOnceDemo',
        templateUrl:  'components/bindOnceDemo/bindOnceDemo.html',
        controller:   'bindOnceDemoController'
    });

}]);
