(function() {
    'use strict';
    
    angular.module('app')
        .controller('letConstBlockController', function($scope) {
            $scope.output = [];
            
            $scope.clear = () => {
                $scope.output = [];
            };
            
            $scope.run = exampleCode;
            
            function exampleCode() {
                
                for (let i = 0; i < 2; i++) {
                    $scope.output.push('i = ' + i);
                }
                
                try {
                    $scope.output.push('after for loop\ni = ' + i);                    
                } catch (exception) {
                    $scope.output.push(exception.message);
                }                
                
            }
        });
})();