module.exports = {
    // define source files and their destinations
       uglify: {
            options: {
                preserveComments: 'all'
            },
            files: [{
                expand: true,
                cwd: 'scripts/',
                src: '**/*.js',
                dest: 'scripts.min/'
            }]
       }
};
