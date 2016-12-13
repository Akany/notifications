const resolve = require('path').resolve;

module.exports = {
	entry: './src/app.js',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	devtool: 'eval',

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}