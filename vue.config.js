// vue.config.js
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/baiduAI' : '/',
	lintOnSave: false,
	devServer: {
		open: true,
		disableHostCheck: true,
		/* 使用代理 */
		proxy: {
			'/api': {
				target: 'https://aip.baidubce.com',
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/api': ''
				}
			}
		},
	},
}
