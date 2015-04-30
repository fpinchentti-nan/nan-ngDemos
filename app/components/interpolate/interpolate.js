angular.module('interpolateDemo').

controller('interpolateDemoController', ['$scope', function ($scope) {

    $scope.mybool = true;
    $scope.mystring = '';
    $scope.myint = 5;
    $scope.myobject = {
        'title': 'js fundamentals',
        'author': 'george romero',
        'isbn': '3545243645'
    };
    $scope.logMessage = '';

    $scope.logPosition = function (keyTarget, $event) {
        var message = keyTarget + ' was clicked at: ' + $event.clientX + ',' + $event.clientY;
        $scope.logMessage = message;
    };

    $scope.mycollection = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    $scope.pageNo = 0;
    $scope.pageSize = 2;

}]);
