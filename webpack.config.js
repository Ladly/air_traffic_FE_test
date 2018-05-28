const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require ('webpack')

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'webpack.bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
		open: true,
		inline: true,
		stats: 'errors-only'

	},
	module: {
		rules: [
			{
			         test: /\.scss$/,
					 use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{ 
				test: /\.js$/, 
				exclude: /node_modules/, 
				loader: ['babel-loader', 'eslint-loader'] 
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][hash:6].[ext]',
							outputPath: ''
						}
					},
				  	
				],
			  }     
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			title: 'webpack-boilerplate',
			template: './index.html',
			hash: true,
			minify: {
				collapseWhitespace: true
			}
		})
	]
}

