var path = require('path');

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js"
    },
    target: "electron",
    node: {
        __dirname: false
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader"}
        ]
    }
};
