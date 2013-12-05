module.exports = {
    tree: {
        command: 'tree scripts --noreport -h',
        options: {
            callback: function (err, stdout, stderr, cb) {
                console.log(stdout);
                cb();
            }
        }
    }
};
