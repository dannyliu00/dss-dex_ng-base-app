angular.module('dssApp', [
    'ngRoute',
    'blockUI',
    'appname.pages.defaultpage'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'scripts/pages/default/default-page-template.html',
                controller: 'defaultPageController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function (blockUIConfig) {
        blockUIConfig.delay = 100;
        blockUIConfig.templateUrl = 'scripts/misc/block-ui-template.html';
    })
    .factory('DTLoadingTemplate', function() {
        return {
            html: '<div ng-show="state.blockCount > 0" class="block-ui-overlay block-ui-visible"  ng-class="{block-ui-visible: state.blocking }"></div>' +
                '<div ng-show="state.blocking" class="block-ui-message-container" aria-live="assertive" aria-atomic="true">' +
                '<div class="block-ui-msg ng-binding">' +
                '<img class="preloader" src="images/preloader-circle-004990.gif"> Processing... please wait' +
                '</div>' +
                '</div>'
        };
    })
    .constant('appTitle', 'Polaris Angular App')
    .constant('roleUrl', '/npoadmin/role')
    .constant('attributeUrl', '/npoadmin/attributes')
    .constant('appTabs', [
        {id: 'tab1', desc: 'Page Tab 1', url: 'url', isActive: 'active'},
        {id: 'tab2', desc: 'Page Tab 2', url: 'url', isActive: ''},
        {id: 'tab3', desc: 'Page Tab 3', url: 'url', isActive: ''},
        {id: 'tab4', desc: 'Page Tab 4', url: 'url', isActive: ''}
    ])
;
