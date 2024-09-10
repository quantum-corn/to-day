const path = require(path);
const HtmlWebpackPlugin = require("html-plugin-webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif|webp)$/i,
                use: "asset/resource",
            },
        ],
    },
};