const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log('test');
module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: {
        app: './index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {presets: ['es2015']},
                }],
            },
            {
                test: /\.css$/,
                //use: ['style-louder', 'css-louder']
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1&modules=true',
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(pug|jade)$/,
                loader: ['pug-loader']
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            allChunks: true,
        }),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        inline: true ,
        port: 5000
    }

}
