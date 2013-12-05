module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({

        pkg: pkg,

        jshint:  require('./tasks/jshint.js'),
        uglify: require('./tasks/uglify.js'),
        replace: require('./tasks/replace.js')
    });

    // Load the plugins that provide the tasks we specified in package.json.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['jshint', 'uglify', 'replace']);
    grunt.registerTask('min', ['uglify', 'replace']);

};
