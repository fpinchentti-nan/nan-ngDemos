angular.module('scopeVariableDemo').

controller('scopeVariableDemoController', ['$scope', function ($scope) {

	$scope.parentVar = "Parent Value";
	$scope.parentObj = {
		val: 'OBJ Parent Value'
	};

}]);
