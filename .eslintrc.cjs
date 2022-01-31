module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:import/recommended', 'prettier'],
	plugins: ['svelte3', 'simple-import-sort', 'import'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
	},
};
