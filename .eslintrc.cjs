module.exports = {
	root: true,
	extends: ['eslint:recommended', 'airbnb-base', 'plugin:svelte/recommended'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest'
	},
	env: {
		browser: true,
		es2017: true
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'comma-dangle': ['error', 'never'],
		'max-len': ['error', 160],
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/svelte.config.js'] }]
	}
};
