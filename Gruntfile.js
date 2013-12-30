module.exports = function (grunt) {

    'use strict';

    require('time-grunt')(grunt);

    var pkg = require('./package.json');

    grunt.initConfig({
        pkg: pkg,

        //include plugin configs
        jshint:  require('./tasks/jshint.js'),
        uglify:  require('./tasks/uglify.js'),
        replace: require('./tasks/replace.js'),
        clean: require('./tasks/clean.js'),
        //please inststall 'tree' first (brew install tree)
        shell: require('./tasks/shell.js')

        //TODO: separate in file
        // removelogging: {
        //     dist: {
        //         src: "src-min/**/*.js",
        //         dest: "src-min/**/*.js",
        //         options: {
        //             // see below for options. this is optional.
        //         }
        //     }
        // }
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-remove-logging');

    // define tasks
    grunt.registerTask('default', ['jshint', 'clean', 'uglify', 'replace', 'shell:tree']);
    grunt.registerTask('min', ['clean', 'uglify', 'replace', 'shell:tree']);

};
