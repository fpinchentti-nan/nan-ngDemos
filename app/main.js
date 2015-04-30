var app = angular.module('demo', [ 'interpolateDemo' ,'ui.router' ]);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('(<_<)');
    $interpolateProvider.endSymbol('(~_~)');
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/interpolateAndSwitchDemo');

}]);

app.filter('myfilter', function(){
    return function(inputArray, selectedPage, pageSize) {
        console.log('Selected ',selectedPage, ' of size: ', pageSize);
        var start = selectedPage*pageSize;
        return inputArray.slice(start, start + pageSize);
    };
});
