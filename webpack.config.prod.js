const merge = require('webpack-merge');
const config = require("./webpack.config.base");
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 每次运行打包时清理过期文件


module.exports = merge(config, {
	mode: "production",
	plugins: [
		new CleanWebpackPlugin(),
	]
})
