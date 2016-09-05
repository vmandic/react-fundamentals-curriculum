var HtmlWebpackPlugin = require("html-webpack-plugin");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + "/app/index.html",
    filename: "index.html",
    inject: "body"
});

var WebpackConfig = {
    devtool: "source-map",
    entry: [
        "./app/index.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundled.js"
    },
    module: {
        loaders:
        [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["react"]
            }
        }]
    },
    plugins: [HtmlWebpackPluginConfig]
};

module.exports = WebpackConfig;