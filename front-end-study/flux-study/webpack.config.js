var webpack = require('webpack');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.js'],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 5000,
        contentBase: __dirname + '/public/',
    },

    module: {

        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js$/,
            exclude: /(node_modules | bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["react-hot-loader/babel"]
                }
            }
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
