module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        less: {
            dev: {
                files:{'app/dist/styles/styles.css':'app/styles/style.less'}
            }
        },

        connect: {
            dev: {
                options: {
                    port: 3020,
                    base:'./app/',
                    keepalive:false
                }
            }
        },

        jshint: {
            dev: [
                'Gruntfile.js',
                'app/components/**/*.js',
                'app/main.js'
            ]
        },

        concat: {
            options: {
                separator: '\n',
            },
            dist: {
                src: [
                    'app/components/interpolate/interpolate.module.js',
                    'app/components/interpolate/interpolate.js',
                    'app/main.js'
                ],
                dest: 'app/dist/js/built.js'
            },
            libs: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js'
                ],
                dest: 'app/dist/js/libs.js'
            }
        },

        watch: {
            connect: {     // task to watch
                options: { // Live reload is now specific to this task
                    livereload: 3021
                },
                files: [   // Files to livereload on
                    "**/*.js",
                    "**/*.html",
                    "!app/dist/js/libs.js",
                    "!app/dist/js/built.js"
                ],
                tasks: ['concat'] // @bug works but executes multiple times on each change
            },
            less: { // less files should be compiled after changes
                files: '**/*.less',
                tasks: ['less'],
                options: {
                    livereload: 3022,
                },
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['less:dev', 'concat', 'connect:dev', 'jshint:dev']);

    grunt.registerTask('default', ['dev', 'watch']);

};
