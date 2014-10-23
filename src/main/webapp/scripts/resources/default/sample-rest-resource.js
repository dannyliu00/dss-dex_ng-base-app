function SampleRestResource ($resource, restUrl) {
    this.resource = $resource(restUrl);
}

/**
 * The sample resource get method
 *
 * @returns {$promise|*} a promise containing a single record of sample data
 */
SampleRestResource.prototype.get = function (id) {
    return this.resource.get(id).$promise;
};

/**
 * The sample resource query method
 *
 * @returns {$promise|*} a promise containing an array of sample data
 */
SampleRestResource.prototype.query = function () {
    return this.resource.query().$promise;
};
