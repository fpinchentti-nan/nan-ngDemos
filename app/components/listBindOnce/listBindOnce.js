angular.module('listBindOnce').

controller('ListBOController', ['$scope', function ($scope) {

    $scope.list = [];

    $scope.long = 20;

    $scope.$watch('long', function (newValue, oldValue) {
        var value = newValue || oldValue;
        var temp = [];
        for(var i = 0; i < value; i++) {
            temp.push(i);
        }
        $scope.list = temp;
    });

    $scope.add = function (n) {
        $scope.long += n;
    };

}]);
