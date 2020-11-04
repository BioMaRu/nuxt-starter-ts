module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-prettier',
		'stylelint-config-idiomatic-order',
	],
	plugins: [],
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		'length-zero-no-unit': true,
	},
}
