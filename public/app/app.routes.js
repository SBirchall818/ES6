(function() {
    angular.module('app')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider.when('/Syntax', {
                templateUrl: 'letConstBlock.html'
            });
            
            $locationProvider.html5Mode(true);
        });
})();