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
                // the server root directory
                // root: <path>,
                // the server port
                // can also be written as a function, e.g.
                // port: function() { return 8282; }
                port: 3000,

                // the host ip address
                // If specified to, for example, "127.0.0.1" the server will
                // only be available on that ip.
                // Specify "0.0.0.0" to be available everywhere
                host: "0.0.0.0",

                //     cache: <
                // sec >,
                showDir: true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: false,

                // specify a logger function. By default the requests are
                // sent to stdout.
                // logFn: function (req, res, error) {
                // },

                // Proxies all requests which can't be resolved locally to the given url
                // Note this this will disable 'showDir'
                // proxy: "http://someurl.com",

                /// Use 'https: true' for default module SSL configuration
                /// (default state is disabled)
                // https: {
                //     cert: "cert.pem",
                //     key: "key.pem"
                // },

                // Tell grunt task to open the browser
                openBrowser: true,

                // customize url to serve specific pages
                // customPages: {
                //     "/readme": "README.md",
                //     "/readme.html": "README.html"
                // }

            }
        }


    });

    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks("grunt-tsc");
    grunt.loadNpmTasks('grunt-http-server');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('myless', ['less']);
    grunt.registerTask('mywatch', ['watch']);
    grunt.registerTask('server', ['http-server']);
    grunt.registerTask('default', ['less', 'watch', 'http-server']);
};