const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const {VueLoaderPlugin} = require('vue-loader')

console.log(path.resolve(__dirname))

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		app: path.resolve(__dirname, '../src/index.js')
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: path.posix.join('static', 'js/[name].[hash].js'),
		publicPath: '/',
	},
	
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'),
	    historyApiFallback: {
	      rewrites: [{from: /.*/, to: '/index.html'}],
	    },
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, '../src'),
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
//				include: [path.resolve(__dirname, '../src/static/js')],
			},
			{
				test: /\.(less|css)$/,
//				include: [
//					path.resolve(__dirname, '../src/static/css')
//				],
				use: [{
					loader: MiniCssExtractPlugin.loader,
				}, {
					loader: 'css-loader'
				}, {
					loader: 'postcss-loader',
					options: {
          				plugins: [
            				autoprefixer,
          				],
        			}
				}, {
					loader: 'less-loader'
				}],
			},
			{
				test: /\.(png|jpg|gif)$/,
				include: [
					path.resolve(__dirname, '../src/static/img')
				],
				use: [
					{
						loader: 'file-loader',
						options: {
							name (file) {
								if (process.env.NODE_ENV === 'development') {
									return path.posix.join('static', 'img/[name].[ext]');
								}
								return path.posix.join('static', 'img/[sha512:hash:base64:7].[ext]');
							},
						}
					}
				]
			},
			{
//				test: /\.vue$/,
//				use: [{
//					loader: 'thread-loader'
//				}, {
//					loader: 'vue-loader',
//				}
//				, {
//					loader: 'vue-style-loader'
//				}, {
//					loader: 'css-loader'
//				}, {
//					loader: 'less-loader'
//				}],

				test: /\.vue$/,
    			loader: 'vue-loader',
    			options: {
        			loaders: {
            			'less': [
                			'vue-style-loader',
                			'css-loader',
                			'less-loader'
            			],
        			}
    			}
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		// 分离CSS文件
		new MiniCssExtractPlugin({
			filename: path.posix.join('static', 'css/[name].[hash].css'),
//			filename: path.posix.join('static', 'css/[name].css'),
		}),
		// 自动生成index.html
		new HtmlWebpackPlugin({
			filename: path.resolve(__dirname, '../dist/index.html'),
			template: 'index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
		}),
	],
}