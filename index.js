"use strict";

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:@tanstack/eslint-plugin-query/recommended",
		"plugin:prettier/recommended",
	],
	plugins: [
		"@typescript-eslint",
		"@tanstack/query",
		"import",
		"react",
		"react-hooks",
		"jsx-a11y",
	],
	parserOptions: {
		warnOnUnsupportedTypeScriptVersion: false,
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		es2021: true,
		node: true,
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: ["./tsconfig.json"],
			},
		},
		react: {
			version: "detect",
		},
	},
	reportUnusedDisableDirectives: true,
	rules: {
		"import/no-unresolved": "error",
		"import/no-duplicates": ["error", { "prefer-inline": false }],
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"object",
				],
				"newlines-between": "always-and-inside-groups",
				alphabetize: { order: "asc", caseInsensitive: true },
			},
		],

		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		// Always use shorthand for `true`
		"react/jsx-boolean-value": "error",
		// Consistently sort props
		"react/jsx-sort-props": [
			"warn",
			{
				ignoreCase: true,
				// key, ref must always come first
				reservedFirst: true,
				// `true` shorthand props must always be last
				shorthandLast: true,
			},
		],

		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		],

		"@typescript-eslint/explicit-function-return-type": "off",
		// Enforce use of Record<string, string> instead of {[key: string]: string};
		"@typescript-eslint/consistent-indexed-object-style": "error",
		// Use 'import type' for type imports
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
			},
		],
		// Declare simple arrays as string[], declare complex ones as Array<string | number>
		"@typescript-eslint/array-type": [
			"error",
			{
				default: "array-simple",
			},
		],
		"@typescript-eslint/no-empty-function": [
			"error",
			{ allow: ["arrowFunctions"] },
		],
		// Enforce PascalCase types and interfaces
		"@typescript-eslint/naming-convention": [
			"error",
			{ selector: "typeLike", format: ["PascalCase"] },
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				varsIgnorePattern: "^_",
				argsIgnorePattern: "^_",
			},
		],
		"prettier/prettier": [
			"error",
			{},
			{
				usePrettierrc: true,
			},
		],
	},
};

module.exports = eslintConfig;
