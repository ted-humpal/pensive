'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const pkg = require('./package.json');

const PATHS = {
	src: path.join(__dirname, '/src'),
};

var config = {};

module: {
	loaders: [
		{   
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query:
			{
				presets:['react', 'es2015']
			}
		}
	],
}

