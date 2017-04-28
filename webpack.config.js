var path = require('path');

module.exports = {
    entry: './app/svg-drafter.ts',
    output: {
        filename: 'drafter.build.js',
        path: path.join(__dirname, '/dist/')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};