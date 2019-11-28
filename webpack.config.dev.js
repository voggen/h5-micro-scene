const merge = require('webpack-merge');
const config = require("./webpack.config.base");
module.exports = merge(config, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map', //用于开发环境监测源码错误来源
	devServer: {
		host: 'localhost',
		port: 9000,
		compress: true, //开启gzip压缩
		hot: true, //模块热替换
		historyApiFallback: true, //history模式
	},
	plugins: [
		
	],
})