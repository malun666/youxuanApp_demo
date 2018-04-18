const path = require('path');
// 引入html打包插件
const htmlPlugin = require('html-webpack-plugin');
// 引入js压缩插件
const uglify = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    //入口文件的配置项
    entry: {
        index: './src/js/index.js',
        //这里我们又引入了一个入口文件
        common: './src/js/common.js',
        rem: "./src/js/rem.js"
    },
    //出口文件的配置项
    output: {
        //输出的路径，用了Node语法
        path: path.resolve(__dirname, 'dist'),
        //输出的文件名称
        filename: './js/[name].js'
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|gif|ico)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 500000
                }
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    },
    //插件，用于生产模版和各项功能
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'

        }),
        new uglify(),
        new webpack.ProvidePlugin({
            $: 'zepto-webpack'
        })
    ],
    //配置webpack开发服务功能
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: 'localhost',
        //服务端压缩是否开启
        compress: true,
        //配置服务端口号
        port: 1717
    }
}