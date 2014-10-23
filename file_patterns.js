
var FilePatterns = {
	gruntFiles: ['Gruntfile.js', 'file_patterns.js'],

	thirdPartyJavascript: [
        'src/main/webapp/bower_components/jquery/dist/jquery.js',
        'src/main/webapp/bower_components/angular/angular.js',
		'src/main/webapp/bower_components/angular-block-ui/angular-block-ui.js',
		'src/main/webapp/bower_components/angular-datatables/dist/angular-datatables.js',
		'src/main/webapp/bower_components/angular-resource/angular-resource.js',
		'src/main/webapp/bower_components/angular-route/angular-route.js',
        'src/main/webapp/bower_components/dex-attributes-resource/src/dex-attr-resource-module.js',
        'src/main/webapp/bower_components/dex-attributes-service/src/dex-attr-service-module.js',
		'src/main/webapp/bower_components/dex-footer/src/dex-footer.js',
		'src/main/webapp/bower_components/dex-header/src/dex-header-module.js',
        'src/main/webapp/bower_components/dex-role-resource/src/dex-role-resource-module.js',
        'src/main/webapp/bower_components/dex-role-service/src/dex-role-service-module.js',
		'src/main/webapp/bower_components/dex-tabs/src/dex-tabs-controller.js',
		'src/main/webapp/bower_components/dex-tabs/src/dex-tabs-directive.js',
		'src/main/webapp/bower_components/dex-tabs/src/dex-tabs-module.js',
		'src/main/webapp/bower_components/dex-tabs-service/src/dex-tab-service.js'
	],

    thirdPartyJavascriptForSpecs: [
		'src/main/webapp/bower_components/angular-mocks/angular-mocks.js'
    ],

    source: [
		'src/main/webapp/scripts/**/*.js',

		// move modules to the end
		'!src/main/webapp/scripts/**/*-module.js',
		'src/main/webapp/scripts/**/*-module.js'

		// load app.js last
		//'!src/main/webapp/scripts/app.js',
		//'src/main/webapp/scripts/app.js'
	],

	specs: [
		'src/test/scripts/**/*_spec.js'
	],

	generatedSource: [
	],

	manifestCache: [
	],

	manifest: [
	]
};

var FilePatternsInterface = {
	watch: FilePatterns.thirdPartyJavascript.concat(FilePatterns.gruntFiles, FilePatterns.source, FilePatterns.specs),
	javascript: {
		jshint: FilePatterns.source.concat(FilePatterns.gruntFiles, FilePatterns.specs),
        specs: FilePatterns.thirdPartyJavascript.concat(FilePatterns.thirdPartyJavascriptForSpecs, FilePatterns.source, FilePatterns.specs),
		concat: FilePatterns.source.concat(FilePatterns.generatedSource)
	},
	manifest: FilePatterns.manifest.concat(FilePatterns.thirdPartyJavascript),
	manifestCache: FilePatterns.manifestCache
};

module.exports.FilePatterns = FilePatternsInterface;