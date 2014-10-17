
var FilePatterns = {
	gruntFiles: ['Gruntfile.js', 'file_patterns.js'],

	thirdPartyJavascript: [
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/dex-attributes-resource/src/dex-attr-resource-module.js',
        'bower_components/dex-attributes-service/src/dex-attr-service-module.js',
        'bower_components/dex-role-resource/src/dex-role-resource-module.js',
        'bower_components/dex-role-service/src/dex-role-service-module.js'
	],

    thirdPartyJavascriptForSpecs: [
        'bower_components/angular-mocks/angular-mocks.js'
    ],

    source: [
		'src/main/webapp/scripts/**/*.js'
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