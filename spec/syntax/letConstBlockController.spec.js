(function() {
    describe('letConstBlockController', function() {
        
        var $scope;
        
        beforeEach(module('app'));
        
        beforeEach(inject(function(_$controller_, _$rootScope_) {
            $scope = {};
            _$controller_('letConstBlockController', { 
                $scope: $scope,
            });

            _$rootScope_.$apply();
        }));
        
        it('should pass', function() {
            expect(true).toEqual(true);
        });
        
        it('should have output defined', function() {
            expect($scope.output).toBeDefined();
        });
        
        it('should have run and clear functions defined', function() {
            expect($scope.run).toBeDefined();
            expect($scope.clear).toBeDefined();
        });
    });
})();