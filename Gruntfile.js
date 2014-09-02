module.exports = function (grunt) {

    'use strict';

    var pkg = require('./package.json');

    grunt.initConfig({
        pkg: pkg,
        //include plugin configs
        jshint:  require('./tasks/jshint.js'),
        shell: require('./tasks/shell.js')
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell');

    // define tasks
    grunt.registerTask('default', ['jshint', 'shell:tree']);
};
