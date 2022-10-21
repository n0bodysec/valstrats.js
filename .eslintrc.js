module.exports = {
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	extends: [
		'@n0bodysec',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
	],
	rules: {
		'import/extensions': 'off',
		'import/no-cycle': 'off',
		'lines-between-class-members': 'off',
		'no-unused-vars': 'off',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-useless-constructor': 'error',
	},
};
