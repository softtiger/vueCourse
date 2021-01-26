const path = require('path')

const webpack = require("webpack")

const htmlWebpackPlugin =  require("html-webpack-plugin")

const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
            path: path.resolve(__dirname,"dist"),
            filename: 'bundle.js'
    },
    
    plugins:[
         //配置根据磁盘上的文件，生成内存中的文件
         //这里是根据src/index.html 生成内存中的 index.html
         new htmlWebpackPlugin({
            template: path.join(__dirname,"./src/index.html"),
            filename: 'index.html'
         }),
          new vueLoaderPlugin()

    ],
    
    
  module:{ //配置第三方模块加载器
       rules: [ 
           //定义匹配规则
           { test: /\.css$/, use:['style-loader','css-loader']},
           { test: /\.less$/, use:['style-loader','css-loader','less-loader']},
           { test: /\.scss$/, use:['style-loader','css-loader','sass-loader']},
            //处理图片路径的loader
           { test: /\.(jpg|jpeg|gif|bmp|png)$/, use:'url-loader'},
            //配置babel 处理js, 并排除/node_modules/ 目录
           { test: /\.js$/, use:'babel-loader',exclude: /node_modules/ },
             { test: /\.vue$/, use:'vue-loader',exclude: /node_modules/ }
       ] 
    },
    resolve:{
        alias:{
       			"vue$": "vue/dist/vue.js"
        }
    	  }
};