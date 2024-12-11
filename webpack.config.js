const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
        }),
        new Dotenv({
            systemvars: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/image/[name][ext]',
                },
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/image/[name][ext]',
                },
            },
        ],
    },
    mode: 'development',

};
