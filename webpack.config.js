const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	entry: './src/index.ts',
	output: {
		library: {
			name: 'jsonBn',
			type: 'umd',
		},
		globalObject: 'this',
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.ts', 'js'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
	]
}