module.exports = {
    tree: {
        command: 'tree scripts-min --noreport -h',
        options: {
            callback: function (err, stdout, stderr, cb) {
                console.log(stdout);
                cb();
            }
        }
    }
};
