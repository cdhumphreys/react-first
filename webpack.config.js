var webpack = require('webpack');
var path = require('path');

var src_dir = path.resolve(__dirname, 'src/');
var dist_dir = path.resolve(__dirname, 'dist/');

var config = {
	entry: [
		'webpack-hot-middleware/client',
		src_dir + '/index.jsx'
	],	
	output: {
		path: dist_dir,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	 resolve: {
        extensions: ['', '.js', '.jsx']
    },
	plugins: [
			new webpack.optimize.OccurenceOrderPlugin(),
	 		new webpack.HotModuleReplacementPlugin(),
	 		new webpack.NoErrorsPlugin()
 		]
	
};

module.exports = config;