var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js'
    },
    devtool: 'eval',
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Oskar\'s starter'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.csv$/,
            use: ['csv-loader'],
            include: path.join(__dirname, 'assets')
        }]
    },
    devServer: {
        historyApiFallback: true
    }
}
