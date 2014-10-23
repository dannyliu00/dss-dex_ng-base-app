describe('SampleRestResource', function() {

    var httpBackend;

    beforeEach(function() {
        angular.mock.module('appname.resources.sampleData');

        angular.mock.inject(function ($injector) {
            httpBackend = $injector.get('$httpBackend');
        });
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    describe('query', function () {
        it('returns a promise of the sample data', inject(function (sampleDataResource, restUrl) {

            var expectedRequest = restUrl.replace('/:id', '');
            var expectedData = [{key: 'value'}, {key: 'value'}];

            httpBackend.when('GET', expectedRequest).respond(expectedData);
            httpBackend.expectGET(expectedRequest);

            var promise = sampleDataResource.query();

            promise.then(function (data) {
                expect(data.length).toEqual(2);
            });
            httpBackend.flush();
        }));
    });

    describe('get', function () {
        it('returns a promise of a sample data object', inject(function (sampleDataResource, restUrl) {

            var testId = 999;
            var testObject = {id: testId};
            var expectedRequest = restUrl.replace(':id', testId);
            var expectedData = {key: 'value'};

            httpBackend.when('GET', expectedRequest).respond(expectedData);
            httpBackend.expectGET(expectedRequest);

            var promise = sampleDataResource.get(testObject);

            promise.then(function (data) {
                expect(data.key).toEqual(expectedData.key);
            });
            httpBackend.flush();
        }));
    });
});