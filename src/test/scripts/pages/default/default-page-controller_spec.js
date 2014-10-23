describe('DefaultPageController', function() {
    'use strict';

    var scope, ctrl;

    beforeEach(function() {
        angular.mock.module('appname.pages.defaultpage');
    });

    beforeEach(inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    it('constructor initializes scope', function() {

        var title = 'UT Title';

        ctrl = new DefaultPageController(scope, title);

        expect(scope.pageTitle).toEqual(title);
    });
});