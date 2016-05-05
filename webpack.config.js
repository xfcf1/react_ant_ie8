var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

var common = [
    'react',
    'react-dom',
    'react-router',
    'redux',
    'react-redux',
    'react-cookie',
]

module.exports = {
    entry: {
        module: path.join(srcPath, 'module.js'),
        common: common
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js', '.css'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {test: /\.jsx?$/, loader: 'es3ify-loader'},
            {test: /\.(jsx|js)$/, loader: 'babel-loader', exclude:/(node_modules|bower_components)/, query: {
                cacheDirectory: true,
                presets: ['es2015', 'react', 'stage-0']
            }},
            {test: /(?!\.html)\.jade$/, loader: 'jade-loader'},
            {test: /\.(css|less)$/, loader: 'style-loader!css-loader!postcss-loader!less-loader'},
            {test: /\.(ttf|eot|woff|woff2|otf|svg)/, loader: 'file-loader?name=./font/[name].[ext]'},
            {test: /\.json$/, loader: 'file-loader?name=./json/[name].json'},
            {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000&name=./images/[name].[ext]'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: srcPath,
        proxy: {
            '/web/*': {
                target: 'http://xxx',
                host: 'xxx'
            }
        },
        historyApiFallback: true
    }
};