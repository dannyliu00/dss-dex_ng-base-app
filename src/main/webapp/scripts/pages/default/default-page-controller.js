function DefaultPageController($scope, strTitle, translation) {

    // We would normally use the translate directive (e.g. <h2 translate>Text to translate</h2>).  But, it is
    // possible to use the service instead and translate the content before putting it on scope like below.
    var translatedTitle = translation.getString(strTitle);
    $scope.pageTitle = translatedTitle;

}
