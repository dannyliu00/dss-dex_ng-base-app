/**
 * Factory definition for sample data service
 *
 * @param $q
 * @param sampleDataResource
 * @returns {*}
 * @constructor
 */
function SampleDataFactory ($q, sampleDataResource) {

    var sampleData = null;
    var dataDeferred  = $q.defer();

    if(sampleData === null) {
        sampleDataResource.query().then(function(data) {
            sampleData = data;
            dataDeferred.resolve(sampleData);
        });
    }

    return dataDeferred.promise;
}
