const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.join(__dirname, "./dist"),
        publicPath: ""
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(png|jpeg|jpg)$/, 
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", "css-loader", "sass-loader"
                ]
            },
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"],
                        plugins: ["transform-class-properties"]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: ["handlebars-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                path.join(process.cwd(), "build/**/*")
            ]
        }),
        new HtmlWebpackPlugin({
            title: "webpackApp",
            description: "some description",
            template: "src/index.hbs"
        })
    ]
}