(function() {
    angular.module('app')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider.when('/let', {
                templateUrl: 'let.html'
            });
            
            $locationProvider.html5Mode(true);
        });
})();