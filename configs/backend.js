'use strict';

// eslint rules
// 0 = off
// 1 = generate warning
// 2 = fail immediately

// http://eslint.org/docs/rules/


module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:import/errors"
	],
	"plugins": [
		// "import"
	],
	"rules": {

		// Allow one-line conditions. Do this whenever possible. `if (err) return next(err);`
		"curly": 0,

		// Space before ternary operator is optional. `(_.isArray(pkeys))? pkeys : [pkeys];`
		"space-infix-ops": 0,

		// JS: single quotes, SQL: double quotes
		"quotes": [0, "single", "avoid-escape"],

		// Declare vars outside of `if` statements.
		"block-scoped-var": 2,

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

		// `var a, b, c`, not `var a,b,c` or `var a ,b ,c`
		"comma-spacing": [2, {
			"before": false,
			"after": true
		}],

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

		// `)};`, not `)}; 	`
		"no-trailing-spaces": 2,

		// End all files with a newline.
		"eol-last": 2,

		// Use semicolons; Always;
		"semi": 2,

		// Point out future ReferenceErrors.
		"no-undef": [2, {
			"typeof": true // `typeof` can swallow ReferenceErrors silently. `if (typeof window === 'undefined')`
		}],

		// Declare vars before using them. `var a = 'hi'; alert(a);`, not `alert(a); var a = 'hi';`
		"no-use-before-define": [2, {
			"functions": false
		}],

		// Use tabs, not spaces. Indent according to position in scope/expression. Basically, keep it neat.
		"indent": [2, "tab", {
			// In `switch { case: }` statements, indent `case` lines one more tab than the `switch` line.
			"SwitchCase": 1
		}],

		// Commas at end of line, not beginning of line.
		"comma-style": 2,

		// `exports.search`, not `exports .search`
		"no-whitespace-before-property": 2,

		// Do not overwrite JS core vars, like `var undefined = 'not undefined';`
		"no-shadow-restricted-names": 2,

		// Use `object.key`, not `object['key']`, whenever possible.
		"dot-notation": [2, {
			// Allow `object['a_key']`.
			"allowPattern": "^[a-z]+(_[a-z]+)+$"
		}],

		// `function() {` not `function(){`
		"space-before-blocks": [2, {
			"functions": "always",
			"keywords": "always",
			"classes": "never"
		}],

		// `next()`, not `next ()`
		"no-spaced-func": 2,

		// `if (err)`, not `if ( err )`
		"space-in-parens": [2, "never"],

		// Use tabs, not spaces.
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],

		// Do not forget to `return` values in array methods like `map` and `reduce`.
		"array-callback-return": 2,

		// `{id: 123}`, not `{id :123}`
		"key-spacing": [2, {
			"beforeColon": false,
			"afterColon": true
		}],

		// `c++`, not `c ++`
		"space-unary-ops": 2,

		// Never put whitespace before semicolons, and always put either a newline or a space after semicolons.
		"semi-spacing": [2, {
			"before": false, // `next();`, not `next() ;`
			"after": true // `case 0: x = 'x'; break;`, not `case 0: x = 'x';break;`
		}],

		// Never set vars inside `return` statements, like `return c++;`
		"no-return-assign": 2,

		// When concatenating strings, use as few string literals as possible. `'something'`, not `'some' + 'thing'`
		"no-useless-concat": 2,

		// This is node.js so allow console.* commands.
		"no-console": 0,

		// Always `'use strict';` at top of files.
		"strict": [2, "safe"],

		// All `require()` statements must always be in the top-level scope. Put them at the top of the file.
		"global-require": 2,

		// Warn when using `process.exit()`. Only do this in tests.
		"no-process-exit": 1,

		// Never ignore an err in node.
		"handle-callback-err": [2, "^(err|error|err[A-Z].+|.+Error)$"],

		/* Our rules */

		// Verify filenames in `require()` statements have correct capitalization.
		"lowercase-require": 2,

		// Prefer `Async.eachSeries` over `Async.each`. To use `Async.each` add an `eslint-disable-line async-series` comment next to it.
		"async-series": 1,

		/* Discussed and decided against */

		// // Limit line length, with some exceptions.
		// "max-len": [2, {"code": 120, "ignoreComments": true, "ignoreTrailingComments": true, "ignoreUrls": true, "ignorePattern": "^.*(return)|(new Error\\().*$"}]

		// // If a function sometimes return a value, make sure it always does.
		// "consistent-return": 2,

		// // Limit number of statements in one line.``
		// "max-statements-per-line": [2, {"max": 1}],

		// // `<li> +`, not `+ <li>`
		// "operator-linebreak": [2, "after", {"overrides": {"?": "before", ":": "before"}}],

		// // `if (x === undefined)`, not `if (undefined === x)`
		// "yoda": 2,

		/* External plugin rules */

		// Verify all modules are in package.json.
		"import/no-extraneous-dependencies": [2],

		// Verify modules exist on the filesystem and that filepaths in `require` statements are correct.
		"import/no-unresolved": [2, {"commonjs": true}]
	},
	"env": {
		"node": true,
		"browser": false,
		"mocha": true
	},
	"globals": {
	}
};
