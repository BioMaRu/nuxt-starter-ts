import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'nuxt-starter-ts',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		{ src: '@/plugins/filter-to-upper-case', mode: 'all' },
		{ src: '@/plugins/app-spinner', mode: 'client' },
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
	],

	// Build module global setting: stylelint
	stylelint: {
		fix: true,
	},

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
}

export default config
