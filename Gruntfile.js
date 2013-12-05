module.exports = function (grunt) {

    'use strict';

    var pkg = require('./package.json');

    grunt.initConfig({
        pkg: pkg,

        //include plugin configs
        jshint:  require('./tasks/jshint.js'),
        uglify:  require('./tasks/uglify.js'),
        replace: require('./tasks/replace.js')
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-text-replace');

    // define tasks
    grunt.registerTask('default', ['jshint', 'uglify', 'replace']);
    grunt.registerTask('min', ['uglify', 'replace']);

};
