// @see http://gruntjs.com/configuring-tasks

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
                    port: 3000,
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
                    'app/components/promisesChainingDemo/promisesChainingDemo.module.js',
                    'app/components/promisesChainingDemo/promisesChainingDemo.js',
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
                    livereload: true
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
                    livereload: true,
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
