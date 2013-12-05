module.exports = {
       replace: {
            src: ['scripts-min/**/*.js'],
            overwrite: true,
            replacements: [{
                from: '.user.js',
                to: '-min.user.js'
            }]
        }
};
