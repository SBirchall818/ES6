'use strict';

(function () {
    'use strict';

    for (var i = 0; i < 2; i++) {
        console.log('i = ' + i);
    }

    var square = function square(n) {
        return n * n;
    };

    angular.module('app').controller('letConstBlockController', function ($scope) {
        $scope.output = ['sample line 1', 'sample line 2'];
    });
})();