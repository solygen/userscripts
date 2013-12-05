module.exports = function (grunt) {

    'use strict';

    var pkg = require('./package.json');

    grunt.initConfig({
        pkg: pkg,

        //include plugin configs
        jshint:  require('./tasks/jshint.js'),
        uglify:  require('./tasks/uglify.js'),
        replace: require('./tasks/replace.js'),
        //please inststall 'tree' first (brew install tree)
        shell: require('./tasks/shell.js')
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-shell');

    // define tasks
    grunt.registerTask('default', ['jshint', 'uglify', 'replace', 'shell:tree']);
    grunt.registerTask('min', ['uglify', 'replace', 'shell:tree']);

};
