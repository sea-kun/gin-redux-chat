const path = require('path')

module.exports = {
    mode: 'development',
    entry: './client/src/jsx/index.jsx',
    output: {
        path: path.resolve(__dirname, '../dist/js'),
        filename: 'chat_log.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader?modules' ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}