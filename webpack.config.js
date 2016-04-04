var webpack = require('webpack');
var path = require('path');

var src_dir = path.resolve(__dirname, 'src/client/public');
var dist_dir = path.resolve(__dirname, 'dist/client/app');

var config = {
	entry: src_dir + '/index.jsx',
	output: {
		path: dist_dir,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: src_dir,
				loader: 'babel'
			}
		]
	}
};

module.exports = config;