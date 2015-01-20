module.exports = function (grunt) {

    'use strict';

    var pkg = require('./package.json');

    grunt.initConfig({
        pkg: pkg,
        //include plugin configs
        jshint:  require('./tasks/jshint.js'),
        jscs:  require('./tasks/jscs.js'),
        shell: require('./tasks/shell.js')
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-shell');

    // define tasks
    grunt.registerTask('default', ['jshint', 'shell:tree']);
};
