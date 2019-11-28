const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //抽离css文件

module.exports = {
	//入口文件
	entry: './src/index.js',

	//出口文件
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].[hash].js'
	},
  	
	//资源
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/, 
				use: [
					'file-loader'
				]
			},
			{
	        	test: /\.(woff|woff2|eot|ttf|otf)$/,
	        	use: [
	           		'file-loader'
	         	],
	       	},
	       	{
	       		test:/\.vue$/,
	       		use: [
	       			'vue-loader'
	       		]
	       	},
	       	{
		        test: /\.js$/,
		        use: [
	       			'babel-loader'
	       		]
		    },	
		]
	},

	//插件
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new VueLoaderPlugin()
	],

	//删除重复依赖，分割公共chunk
	optimization: {
		runtimeChunk: 'single',
	   	splitChunks: {
	     cacheGroups: {
	       vendor: {
	         test: /[\\/]node_modules[\\/]/,
	         name: 'vendors',
	         chunks: 'all'
	       }
	     }
	   }
	},

	resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
};