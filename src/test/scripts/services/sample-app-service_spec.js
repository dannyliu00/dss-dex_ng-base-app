describe('SampleDataFactory', function() {
    'use strict';

    var sampleDataResource, expectedDataDeferred;
    var factory;

    beforeEach(function() {
        angular.mock.module('appname.services.sampleDataCacheService');

        angular.mock.module(function ($provide) {
            sampleDataResource = jasmine.createSpyObj('sampleDataResource', ['query']);

            $provide.decorator('sampleDataResource', function () {
                return sampleDataResource;
            });
        });
    });

    beforeEach(inject(function ($q, sampleDataResource) {
        expectedDataDeferred = $q.defer();
        sampleDataResource.query.andReturn(expectedDataDeferred.promise);
    }));

    describe('factory', function() {
        it('returns a promise containing the sample data but only calls the actual resource once', inject(function ($rootScope, sampleDataResource, sampleData) {
            var sample = {
                key: "value",
                key2: "value2"
            };
            expectedDataDeferred.resolve(sample);

            // First call should retrieve from the resource.
            // Subsequent calls should use the already retrieved data.  Assertions are at the bottom of the test.
            var i = 0, j = 4;
            var results = [];
            for(i; i < j; i++) {
                sampleData.then(function(samplePromise) {
                    expect(samplePromise).toEqual(sample);
                    results.push(samplePromise);
                });

                $rootScope.$digest();
            }

            expect(sampleDataResource.query.callCount).toBe(1);
            expect(results.length).toEqual(j);
        }));
    });

});
