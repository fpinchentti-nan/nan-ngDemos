angular.module('promisesChainingDemo', ['ui.router']).

    config(['$stateProvider', '$urlRouterProvider', function($stateProvider) {
        $stateProvider.state('promisesChainingDemo', {
            url:'/promises-chaining-demo',
            templateUrl:  'components/promisesChainingDemo/promisesChainingDemo.html',
            controller:   'promisesChainingDemoController'
        });

    }]);
