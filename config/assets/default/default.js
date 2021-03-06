'use strict';

module.exports = {
    client: {
        // lib: {
        //     css: [
        //         'public/lib/bootstrap/dist/css/bootstrap.css',
        //         'public/lib/bootstrap/dist/css/bootstrap-theme.css',
        //         'public/lib/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css'
        //     ],
        //     js: [
        //         'public/lib/jquery/dist/jquery.min.js',
        //         'public/lib/bootstrap/dist/js/bootstrap.js',
        //         'public/lib/moment/min/moment.min.js',
        //         'public/lib/angular/angular.js',
        //         'public/lib/angular-resource/angular-resource.js',
        //         'public/lib/angular-messages/angular-messages.js',
        //         'public/lib/angular-animate/angular-animate.js',
        //         'public/lib/angular-touch/angular-touch.js',
        //         'public/lib/angular-ui-router/release/angular-ui-router.js',
        //         'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        //         'public/lib/owasp-password-strength-test/owasp-password-strength-test.js',
        //         'public/lib/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js'
        //     ],
        //     tests: ['public/lib/angular-mocks/angular-mocks.js']
        // },
        css: [
            'app/*/client/css/*.css'
        ],
        less: [
            'app/*/client/less/*.less'
        ],
        js: [
            'app/main.js',
            'app/app.module.js',
            'app/app.routing.js',
            'app/*/client/*.js',
            'app/*/client/**/*.js'
        ],
        // img: [
        //     'modules/**/*/img/**/*.jpg',
        //     'modules/**/*/img/**/*.png',
        //     'modules/**/*/img/**/*.gif',
        //     'modules/**/*/img/**/*.svg'
        // ],
        views: ['app/*/client/views/*.html'],
    },
    // server: {
    //     gruntConfig: ['gruntfile.js'],
    //     allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
    //     models: 'modules/*/server/models/**/*.js',
    //     routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
    //     config: ['modules/*/server/config/*.js'],
    //     views: ['modules/*/server/views/*.jade']
    // }
};