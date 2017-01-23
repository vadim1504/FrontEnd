const webpack = require('webpack');

module.exports = {
    entry: "./src/index",
    output: {
        path: __dirname + "/build",
        filename: "build.js"
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: ['/node_modules'],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0', 'stage-1']
            }
        }]
    },

    watch: true,

    devtool: "cheap-source-map"
};