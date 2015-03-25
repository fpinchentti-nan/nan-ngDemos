angular.module('scopeVariableDemo').

controller('childController', ['$scope', function ($scope) {

	$scope.changeValue = function(newVal,objVal){
		$scope.parentVar = newVal;
		$scope.parentObj.val = objVal;
	};

}]);
