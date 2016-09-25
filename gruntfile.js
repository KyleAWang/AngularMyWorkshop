'use strict'

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // env: {
        //     test: {
        //         NODE_ENV: 'test'
        //     },
        //     dev: {
        //         NODE_ENV: 'development'
        //     }
        // },
        watch: {
            clientLESS: {
                files: 'app/*/client/less/*.less',
                tasks: ['less'],
                options: {
                    debounceDelay: 300,
                    livereload: true
                }

            }
        },
        less: {
            dist: {
                files: [{
                    expand: true,
                    src: 'app/*/client/less/*.less',
                    ext: '.css',
                    rename: function (base, src) {
                        return src.replace('/less/', '/css/')
                    }
                }]
            }
        },
        tsc: {
            // global options
            options: {
                "target": "es5",
                "module": "commonjs",
                "moduleResolution": "node",
                "sourceMap": true,
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "removeComments": false,
                "noImplicitAny": false
            }
        },
        'http-server': {
            'dev': {
                port: 3000,
                host: "0.0.0.0",
                showDir: true,
                autoIndex: true,
                ext: "html",
                runInBackground: false,
            }
        },
        concurrent: {
            default: ['watch', 'http-server'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-tsc");
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('myless', ['less']);
    grunt.registerTask('mywatch', ['watch']);
    grunt.registerTask('server', ['http-server']);
    grunt.registerTask('default', ['less', 'concurrent:default']);
};