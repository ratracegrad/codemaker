const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        'test-evaluator': './src/workers/test-evaluator/index.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, 'public/js/workers')
    },
    devtool: 'source-map'
};
