(function () {
    'use strict';

    /**
     * Angular module definition for the sample rest resource
     */
    angular.module('appname.resources.sampleData', ['ngResource'])
        .service('sampleDataResource', ['$resource', 'restUrl', SampleRestResource])
        .constant('restUrl', '/url/path/to/rest/data/:id');

})();