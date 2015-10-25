module.exports = function (grunt) {

    'use strict';

    var pkg = require('./package.json');

    grunt.initConfig({
        pkg: pkg,
        //include plugin configs
        eslint:  require('./tasks/eslint.js'),
        shell: require('./tasks/shell.js')
    });

    // load plugins
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-shell');

    // define tasks
    grunt.registerTask('default', ['eslint', 'shell:tree']);
};
