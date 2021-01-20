const path = require('path')

const webpack = require("webpack")

const htmlWebpackPlugin =  require("html-webpack-plugin")

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
            path: path.resolve(__dirname,"dist"),
            filename: 'bundle.js'
    },
    
    devServer:{
        open:true,
        port:9090,
        hot: true,
        contentBase: 'src'
    },

    plugins:[
         //配置根据磁盘上的文件，生成内存中的文件
         //这里是根据src/index.html 生成内存中的 index.html
         new htmlWebpackPlugin({
            template: path.join(__dirname,"./src/index.html"),
            filename: 'index.html'
         })

    ],
    
    
    module:{ //配置第三方模块加载器
       rules: [ 
           //定义匹配规则;调用规则,
           { test: /\.css$/, use:['style-loader','css-loader']}

       ] 
    }
};