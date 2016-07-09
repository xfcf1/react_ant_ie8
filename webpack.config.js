var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

var common = [
    'react',
    'react-dom',
    'react-router',
    'redux',
    'react-redux',
    'js-cookie',
];

var config = {
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
            {
                test: /\.(jsx|js)$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/, query: {
                cacheDirectory: true,
                presets: ['es2015', 'react', 'stage-0'],
                plugins: [['antd', {style: 'css'}], 'add-module-exports']
            }
            },
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader", "less-loader")
            },
            // {test: /\.(css|less)$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.(ttf|eot|woff|woff2|otf|svg)/, loader: 'file-loader?name=./font/[name].[ext]'},
            {test: /\.json$/, loader: 'file-loader?name=./json/[name].json'},
            {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000&name=./images/[name].[ext]'}
        ],
        postLoaders: [
          {
            test: /\.js$/,
            loaders: ['es3ify-loader']
          }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
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
        host:'0.0.0.0',
        historyApiFallback: true
    }
};

if(process.env.NODE_ENV === 'production'){
    config.output.filename = '[name].[chunkhash:6].js';
    config.plugins.splice(0, 1 , new ExtractTextPlugin('style.[chunkhash:6].css'));
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.CommonsChunkPlugin({names:['common']}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    )
}
module.exports = config;
