const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const APP_DIR = path.resolve(__dirname, 'src/app');

const extractLess = new ExtractTextPlugin({
    filename: "css/styles.css"
});

module.exports = {
    entry: {
        app: `${APP_DIR}/app.jsx`
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                include: APP_DIR,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: '',
                            name: '[name].[ext]',
                            useRelativePath: process.env.NODE_ENV === "production",
                            outputPath: 'assets/img/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Reactjs Template',
            template: './src/index.html'
        }),
        extractLess
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
