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
         //���ø��ݴ����ϵ��ļ��������ڴ��е��ļ�
         //�����Ǹ���src/index.html �����ڴ��е� index.html
         new htmlWebpackPlugin({
            template: path.join(__dirname,"./src/index.html"),
            filename: 'index.html'
         })

    ],
    
    
    module:{ //���õ�����ģ�������
       rules: [ 
           //����ƥ�����;���ù���,
           { test: /\.css$/, use:['style-loader','css-loader']}

       ] 
    }
};