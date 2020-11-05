module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-tabs': 'off',
		'no-unused-vars': ['warn'],
		'comma-dangle': ['error', 'only-multiline'],
		'vue/max-attributes-per-line': 'error',
		'vue/html-indent': ['error', 'tab'],
		'vue/order-in-components': ['error'],
	},
}
