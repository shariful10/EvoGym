module.exports = {
	root: true,
	env: { browser: true, es2023: true, Node: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react/prop-types": "off",
		"react/react-in-tsx-scope": "off",
		"react/no-unescaped-entities": 0,
	},
};
