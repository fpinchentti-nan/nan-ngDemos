angular.module('qAllDemo').

controller('qAllDemoController', ['$scope', '$http', '$q', function ($scope, $http, $q) {

	var promiseList = [];
	$scope.showOK = false;
	$scope.loading = false;
	$scope.finishTest = false;
	$scope.finishGoogle = false;

	  $scope.getLocation = function() {
	  	$scope.finishGoogle = true;
	  	$scope.loading = true;
	  	$scope.showOK = false;
	  	options = {
	  		params :{address: $scope.search, sensor: false}
	  	};		
	    return $http.get('http://maps.googleapis.com/maps/api/geocode/json',options)
	    .then(function(response){
	    	$scope.resultsGoogle = response.data.results.map(function(item){
        						return item.formatted_address;
      						});
	    	$scope.finishGoogle = true;
	    });
	  };



	  $scope.getTestInformation = function(){
	  	$scope.finishTest = false;
	  	$scope.loading = true;
	  	$scope.showOK = false;	
	    
	    return $http.get('http://www.w3schools.com/angular/customers.php')
	    .then(function(response){
	    	$scope.resultsTest = response.data.records.map(function(item){
        						return item.Name;
      						});
	    	$scope.finishTest = true;
	    });
	  };

	  $scope.submit = function(){
	  	$scope.resultsGoogle = null;
	  	$scope.resultsTest = null;
	  	promiseList.push($scope.getLocation());
	  	promiseList.push($scope.getTestInformation());

	  	var ok = function(){
	  		$scope.showOK = true;
	  		$scope.loading = false;	
	  	};
	  	$q.all(promiseList).then(ok);
	  };

}]);
