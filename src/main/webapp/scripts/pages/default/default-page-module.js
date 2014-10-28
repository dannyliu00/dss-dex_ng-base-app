(function() {
    'use strict';

    angular.module('appname.pages.defaultpage', ['polaris.services.translation'])
        .constant('strTitle', 'Polaris Angular App Page Title')
        .controller('defaultPageController', ['$scope', 'strTitle', 'translation', DefaultPageController]);
})();
