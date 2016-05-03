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
    target: 'web',
    cache: true,
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
        filename: '[name].js',
        library: ['Example', '[name]'],
        pathInfo: true
    },

    module: {
        loaders: [
            {test: /\.(jsx|js)$/, loader: 'babel-loader', query: {
                cacheDirectory: true,
                presets: ['es2015', 'react', 'stage-0']
            }},
            {test: /\.html$/, loader: 'raw'},
            {test: /(?!\.html)\.jade$/, loader: 'jade-loader'},
            {test: /\.(css|less)$/, loader: 'style-loader!css-loader!postcss-loader!less-loader'},
            {test: /\.(ttf|eot|woff|woff2|otf|svg)/, loader: 'file-loader?name=./font/[name].[ext]'},
            {test: /\.json$/, loader: 'file-loader?name=./json/[name].json'},
            {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000&name=./images/[name].[ext]'},
            {test: /jquery\.js$/, loader: 'expose?jQuery'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],

    debug: true,
    devtool: 'false',
    devServer: {
        contentBase: './dist',
        proxy: {
            '/web/*': {
                target: 'http://139.196.12.160:8010',
                host: '139.196.12.160'
            }
        },
        historyApiFallback: true
    }
};