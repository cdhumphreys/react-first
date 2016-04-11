var webpack = require('webpack');
var path = require('path');

var src_dir = path.resolve(__dirname, 'src/');
var dist_dir = path.resolve(__dirname, 'dist/');

var config = {
	entry: __dirname + '/src/index.jsx',

	output: {
		path: __dirname + '/dist/',
		publicPath: '/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: __dirname + '/src',
				loader: 'babel'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devtool: 'source-map',
	devServer: {
		colors: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		contentBase: './'
	}
	
};

module.exports = config;