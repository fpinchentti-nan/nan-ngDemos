angular.module('promisesChainingDemo')
.controller('promisesChainingDemoController', ['$scope', '$log', '$q', '$timeout', function ($scope, $log, $q, $timeout) {
    var Person = function (name, $log) {
        this.eat = function (food) {
            $log.info(name + " is eating delicious " + food);
        };

        this.beHungry = function (reason) {
            $log.warn(name + " is hungry because: " + reason);
        };
    };

    var Restaurant = function ($q) {
        var currentOrder;

        this.takeOrder = function (orderedItems) {
            currentOrder = {
                deferred: $q.defer(),
                items: orderedItems
            };
            return currentOrder.deferred.promise;
        };

        this.deliverOrder = function() {
            currentOrder.deferred.resolve(currentOrder.items);
        };

        this.problemWithOrder = function(reason) {
            currentOrder.deferred.reject(reason);
        };
    };

    var personPit = new Person('Pit', $log);
    var personPete = new Person('Pete', $log);

    var pizzaPit = new Restaurant($q);
    var pizzaDelivered = pizzaPit.takeOrder('Capricciosa');

    // Example 1
    $scope.problemWithOrder = function() {
        pizzaDelivered.then(personPit.eat, personPit.beHungry);

        pizzaPit.problemWithOrder('no Capricciosa, only Margherita left');
    };

    // Example 2
    $scope.deliverOrderForBoth = function() {
        pizzaDelivered.then(personPit.eat, personPit.beHungry);
        pizzaDelivered.then(personPete.eat, personPete.beHungry);

        pizzaPit.deliverOrder();
    };

    // Example 3
    $scope.deliverOrderWithChain = function() {
        var portion = function(pizza) {
            return "portion of " + pizza;
        };

        pizzaPit.takeOrder('pizza').then(portion).then(personPit.eat);
        pizzaPit.deliverOrder();
    };

    // Example 4
    $scope.problemWithOrderWithChain = function() {
        var portion = function(pizza) {
            return "portion of " + pizza;
        };
        pizzaPit.takeOrder('pizza').then(portion).then(personPit.eat, personPit.beHungry);

        pizzaPit.problemWithOrder('no Pizza, only Burger left');
    };

    // Example 5
    $scope.retryWithChain = function() {
        var portion = function(food) {
            return "portion of " + food;
        };

        var retry = function() {
            return pizzaPit.takeOrder('spaghetti').then(portion);
        };

        pizzaPit.takeOrder('pizza').then(portion, retry).then(personPit.eat, personPit.beHungry);
        pizzaPit.problemWithOrder('no pizza, only spaghetti left');

        $timeout(pizzaPit.deliverOrder, 2000);
    };

}]);
