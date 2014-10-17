
var FilePatterns = require('./file_patterns.js').FilePatterns;

module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({

        vars: {
            // configurable variables
            src: 'src/main/webapp',
            dist: 'target/baseNGApp',
            minifiedName: '',
            sourceName: ''
        },

        jshint: {
            files: FilePatterns.javascript.jshint,
            options: {
                bitwise: true,      // prohibit use of bitwise operators such as ^ (XOR), | (OR) and others
                curly: false,       // requires you to always put curly braces around blocks in loops and conditionals
                eqeqeq: false,      // prohibits the use of == and != in favor of === and !==
                eqnull: true,       // suppresses warnings about == null comparisons
                forin: true,        // requires all for in loops to filter object's items
                indent: 4,          // char size of indents
                latedef: false,     // prohibits the use of a variable before it was defined
                undef: false,       // prohibits the use of explicitly undeclared variables
                strict: false,      // requires all functions to run in ECMAScript 5's strict mode
                trailing: true,     // makes it an error to leave a trailing whitespace in your code
                maxerr: 50,         // maximum amount of warnings JSHint will produce before giving up
                smarttabs: false,   // suppresses warnings about mixed tabs and spaces when the latter are used for alignment only
                loopfunc: true,
                globals: {
                    $: true,
                    window: true,
                    require: true,
                    module: true,
                    angular: true,
                    jasmine: true,
                    beforeEach: true,
                    afterEach: true,
                    describe: true,
                    inject: true,
                    expect: true,
                    it: true,
                    console: true,
                    spyOn: true
                }
            }
        },

        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.livereload.options.livereload %>'
                },
                files: grunt.file.expand(FilePatterns.watch)
            },
            test: {
                files: grunt.file.expand(FilePatterns.watch),
                tasks: ['jshint', 'karma:unit:run']
            },
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            }
        },

        connect: {
            options: {
                port: 9000,
                host: 'localhost',
                base: '<%= vars.src %>'
            },
            livereload: {
                options: {
                    open: false,
                    livereload: 35729
                }
            },
            headless: {
                options: {
                    open: false
                }
            }
        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= vars.dist %>/*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= vars.dist %>/index.html',
            options: {
                dest: '<%= vars.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            html: ['<%= vars.dist %>/{,*/}*.html'],
            css: ['<%= vars.dist %>/css/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= vars.dist %>']
            }
        },

        // The following *-min tasks produce minified files in the dist folder
        cssmin: {
            options: {
                root: '<%= vars.src %>'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= vars.dist %>',
                    src: ['*.html', 'js/{,*/}*.html'],
                    dest: '<%= vars.dist %>'
                }]
            }
        },

        uglify: {
            my_target: {
                files: {
                    '<%= vars.dist %>/<%= vars.minifiedName %>.min.js': ['<%= vars.src %>/<%= vars.sourceName %>.js']
                }
            }
        },

        // Copies files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    dest: '<%= vars.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '*.html',
                        'images/{,*/}*',
                        'scripts/{,*/}*',
                        'fonts/*',
                        'styles/*',
                        'styles/images/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= vars.dist %>/images',
                    src: ['generated/*']
                }]
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles'
            ]
        },

        exec: {
            cucumberjs: {
                command: 'cucumber-js -f pretty <%= cucumberjs.files %>'
            }
        },

        cucumberjs: {
            files: grunt.option('files') || ''
        },

        karma: {
            options: {
                files: grunt.file.expand(FilePatterns.javascript.specs)
            },

            unit: {
                configFile: 'karma.conf.js',
                singleRun: false,
                background: true
            },

            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },

        mochaTest: {
            endpoints: {
                src: grunt.file.expand([
                    'src/test/scripts/endpoints/endpoints/**/*.js'
                ])
            }
        },

        bowerInstall: {
            target: {
                src: ['src/main/webapp/index.html'],
                jsPattern: '<script type="text/javascript" src="{{filePath}}"></script>',
                cssPattern: '<link href="{{filePath}}" rel="stylesheet" />'
            }
        },

        bump: {
            options: {
                commit: true,
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: false
            }
        }
    });

    grunt.registerTask('label', function() {
        var buildLabel = grunt.option('buildLabel');
        if (buildLabel) {
            grunt.file.write('build/buildLabel', buildLabel);
        }
    });

    grunt.registerTask('default', []);

    grunt.registerTask('cucumberjs', ['connect:headless', 'exec:cucumberjs']);
    grunt.registerTask('dev', ['karma:unit:start', 'watch:test']);
    grunt.registerTask('build', [
        'clean:dist',
        'copy',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'usemin'
    ]);
};
