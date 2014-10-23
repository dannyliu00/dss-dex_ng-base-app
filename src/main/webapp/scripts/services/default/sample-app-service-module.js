(function() {
    'use strict';

    /**
     * Angular module for sample data cache service
     */
    angular.module('appname.services.sampleDataCacheService', ['appname.resources.sampleData'])
        .factory('sampleData', ['$q', 'sampleDataResource', SampleDataFactory]);
})();