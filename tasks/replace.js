module.exports = {
       replace: {
            src: ['scripts-min/**/*.js'],
            overwrite: true,                 // overwrite matched source files
            replacements: [{
                from: '.user.js',
                to: '-min.user.js'
            }]


            // options: {
            //   patterns: [{
            //         match: 'js',
            //         replacement: '<%= new Date().getTime() %>',
            //         expression: false
            //     }]
            // },
            // files: [{
            //     expand: true, flatten: true, src: ['scripts-min/magiccards.info/proxies.user.js'], dest: 'test/'
            //     // expand: true,
            //     // cwd: 'scripts-min/',
            //     // src: '**/*.js',
            //     // dest: 'scripts-min/'
            // }]
        }
};
