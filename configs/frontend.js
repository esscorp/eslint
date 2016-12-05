'use strict';

// eslint rules
// 0 = off
// 1 = generate warning
// 2 = fail immediately

// http://eslint.org/docs/rules/

module.exports = {
	"rules": {
		// Allow one-line conditions. Do this whenever possible. `if (err) return next(err);`
		"curly": 0,

		// Space before ternary operator is optional. `(_.isArray(pkeys))? pkeys : [pkeys];`
		"space-infix-ops": 0,

		// JS: single quotes, SQL: double quotes
		"quotes": [2, "single", "avoid-escape"],

		// Declare vars outside of `if` statements.
		"block-scoped-var": 2,

		// `{'a': 'b'}`, not `{ 'a': 'b' }`
		"object-curly-spacing": [2, "never"],

		// `[1]`, not `[ 1 ]`
		"array-bracket-spacing": [2, "never"],

		// `obj[key]`, not `obj[ key ]`
		"computed-property-spacing": [2, "never"],

		// JS keywords and core functions must have whitespace before and after them. Keyword list: http://eslint.org/docs/rules/keyword-spacing#rule-details
		"keyword-spacing": [2, {
			"before": true, // `} else {`, not `}else {`
			"after": true, // `if ()`, not `if()`
			"overrides": {
				"function": { // `function()`, not `function ()`
					"after": false
				}
			}
		}],

		// Require 1 true brace style for multi-line if statements. E.g.: http://eslint.org/docs/rules/brace-style#tbs
		"brace-style": [2, "1tbs"],

		// Capitalize constructor functions. `new Worker()`, not `new worker()`
		"new-cap": [2, {
			"capIsNew": false // Other functions can be capitalized too. `Assert()`
		}],

		// Allow functions to begin with '_'. Do this for all private functions.
		"no-underscore-dangle": 0,

		// Allow snake_case. SQL: snake_case, JS: camelCase. Use snake_case for JS vars named after SQL vars.
		"camelcase": 0,

		// Allow variables to be overwritten in callbacks, like `event`. Just be careful when doing this.
		"no-shadow": 0,

		// Always `'use strict';` in function declarations.
		"strict": [1, "function"]
	},
	"env": {
		"node": false,
		"browser": true,
		"jquery": true
	},
	"globals": {
		"console": false,
		"localStorage": false,
		"_": false,
		"$": false,
		"jQuery": false,
		"Backbone": false,
		"moment": false,
		"App": false,
		"Handlebars": false,
		"Tour": false
	}
};
