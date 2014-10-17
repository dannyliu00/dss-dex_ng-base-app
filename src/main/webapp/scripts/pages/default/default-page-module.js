(function() {
    'use strict';

    angular.module('appname.pages.defaultpage', ['polaris.directives.dexHeader', 'polaris.directives.dexFooter', 'polaris.directives.tabs'])
        .constant('strTitle', 'Polaris Angular App Page Title')
        .controller('defaultPageController', ['$scope', 'strTitle', DefaultPageController]);
})();
