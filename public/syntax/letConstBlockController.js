'use strict';

(function () {
    'use strict';

    angular.module('app').controller('letConstBlockController', function ($scope) {
        $scope.output = [];

        $scope.clear = function () {
            $scope.output = [];
        };

        $scope.run = exampleCode;

        function exampleCode() {

            for (var _i = 0; _i < 2; _i++) {
                $scope.output.push('i = ' + _i);
            }

            try {
                $scope.output.push('after for loop\ni = ' + i);
            } catch (exception) {
                $scope.output.push(exception.message);
            }
        }
    });
})();