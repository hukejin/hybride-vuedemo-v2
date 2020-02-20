// 导入compression-webpack-plugin
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css']

module.exports = {
	publicPath : process.env.NODE_ENV === 'production' ? '/hybridvue2/' : '/',//访问的根路径
	outputDir : process.env.NODE_ENV === 'production' ? 'hybridvue2' : 'dist',//编译生成的文件夹
	lintOnSave: process.env.NODE_ENV !== 'production',
	configureWebpack: {
		plugins: [
			new CompressionWebpackPlugin({
				filename: '[path].gz[query]',
				algorithm: 'gzip',
				test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
				threshold: 10240,
				minRatio: 0.8
			})
		]
	}
}
