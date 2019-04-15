const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: ['babel-polyfill', path.resolve(__dirname, "./src/js/index.js")],
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: '/dist/', 
        filename: 'bundle.js'
    },
    devServer:{
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ]
}