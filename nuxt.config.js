module.exports = {
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'nuxt-static-example',
		meta: [{
				charset: 'utf-8'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js project'
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},
	// // グローバルに適用したいCSS
	// css: [
	// 	// プロジェクト内の CSS ファイル
	// 	'@/assets/css/main.css',
	// 	// プロジェクト内の SCSS ファイル
	// 	'@/assets/css/main.scss'
	// ],

	// css: [
	// 	'@css/app.css'
	// ],
	/*
	 ** Customize the progress bar color
	 */
	loading: {
		color: '#3B8070'
	},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** Run ESLint on save
		 */
		extend(config, {
			isDev
		}) {
			if (isDev && process.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})

				// // Add postcss loader for CSS files
				// const cssLoader = config.module.rules.find((loader) => loader.test.toString() === '/\\.css$/')
				// cssLoader.use.push('postcss-loader')
			}
		}
	}
}
