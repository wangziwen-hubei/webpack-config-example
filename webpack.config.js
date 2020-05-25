const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

/*module是nodejs的模块系统 意思是输出一个模块 
使用npm run dev时(package.json中配置的脚本)
webpack会require获取这个模块的配置然后执行相应的操作*/

module.exports = {   
    /*development 开发环境 启动devserver后浏览器souces可断点js
    production生产环境 浏览器souces打开是编译后文件（压缩过）。*/
    // mode: 'development',   // 通过命令传递--mode 配置参数
    entry: './index.js',   //打包入口文件
    output: {
        filename: '[name].js',   //输出文件名
        path: path.resolve(__dirname, 'dist')   //输出路径
    },
    module: {
        rules: [         //loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({   //html编译插件
            template: './index.html'
        }),
    ],
    devServer: {
        port: 3000, //设置端口号
        hot: true, //热更新
        contentBase: './', //path.join(__dirname, 'dist'), //默认打开文件位置
        open: false  //自动打开
    }
};