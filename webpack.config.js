const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const webpack = require('webpack');

const path = require('path');

module.exports = {
    // entry point -> output
    entry: './src/app.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    //loader
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    plugins: [
        new LodashModuleReplacementPlugin,
        new webpack.optimize.UglifyJsPlugin
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname),
        historyApiFallback: {
            index: '/index.htm'
        }
    }
};

