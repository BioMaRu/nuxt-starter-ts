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

	plugins: ['prettier', 'simple-import-sort'],

	// add your custom rules here
	rules: {
		'simple-import-sort/sort': 'error',
		'sort-imports': 'off', // disable to not conflict with simple-import-sort/sort
		'import/order': 'off', // disable to not conflict with simple-import-sort/sort

		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'no-tabs': 'off',
		'no-unused-vars': ['warn'],
		'comma-dangle': ['error', 'only-multiline'],

		// Vue releted rule
		'vue/max-attributes-per-line': 'error',
		'vue/html-indent': ['error', 'tab'],
		'vue/order-in-components': ['error'],
		'vue/singleline-html-element-content-newline': ['off'],
	},
}
