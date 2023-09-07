import test from "ava";
import { ESLint } from "eslint";

import config from "../index.js";

/**
 * [is-plain-obj]{@link https://www.npmjs.com/package/is-plain-obj}
 *
 * @param {any} value
 * @returns {boolean}
 */
function isPlainObject(value) {
	if (typeof value !== "object" || value === null) {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return (
		(prototype === null ||
			prototype === Object.prototype ||
			Object.getPrototypeOf(prototype) === null) &&
		!(Symbol.toStringTag in value) &&
		!(Symbol.iterator in value)
	);
}

const hasRule = (errors, ruleId) =>
	errors.some((error) => error.ruleId === ruleId);

async function runEslint(string, config) {
	const eslint = new ESLint({
		useEslintrc: false,
		overrideConfig: config,
	});

	const [firstResult] = await eslint.lintText(string);

	return firstResult.messages;
}

test("config", (t) => {
	t.true(isPlainObject(config));
	t.true(isPlainObject(config.rules));
});

test("main", async (t) => {
	const errors = await runEslint("function foo() {}", config);
	t.true(
		hasRule(errors, "@typescript-eslint/no-empty-function"),
		JSON.stringify(errors, null, 2),
	);
});
