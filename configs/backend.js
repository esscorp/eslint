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
	"env": {
		"node": true,
		"browser": false,
		"mocha": true,
		"es6": true
	},
	"parserOptions": {
		"ecmaVersion": 6,
		"sourceType": "script"
	},
	"globals": {},
	"rules": {

		/*****************************
		* Possible Errors
		*****************************/

		// This is node.js so allow console.* commands.
		"no-console": 0,

		// Allow unnecessary parentheses. We have not had a problem with this yet.
		"no-extra-parens": 0,

		// Allow direct use of `Object.prototype` builtin methods. We have not had a problem with this yet.
		"no-prototype-builtins": 0,

		// Do not use template syntax inside a regular string. `${var}`, not '${var}'
		"no-template-curly-in-string": 2,

		/*****************************
		* Best Practices
		*****************************/

		// Do not forget to `return` values in array methods like `map` and `reduce`.
		"array-callback-return": 2,

		// Declare vars outside of `if` statements.
		"block-scoped-var": 2,

		// Allow unlimited cyclomatic complexity (any number of execution paths due to conditionals).
		// The length of each exection path after they split has a much higher impact to complexity than the number of them.
		// Having 3 paths which call 4 functions each is much more complex than 12 paths which call 1 function each.
		// Likewise, nested conditions add much more complexity than consecutive ones.
		// A function with 2 conditions which have 2 conditions each is much more complicated than a function with 6 conditions.
		// Also, if adding conditions increases explicitness by decreasing abstraction, it will decrease complexity. Explicit code > DRY code.
		"complexity": 0,

		// Allow a function to return a value in some cases and no value in other cases (return early).
		"consistent-return": 0,

		// Allow one-line conditions. Do this whenever possible. `if (err) return next(err);`
		"curly": 0,

		// Allow switch statements not to have a default case. todo: revisit
		"default-case": 0,

		// In multi-line chains, begin each line with a dot instead of ending each line with a dot.
		"dot-location": [2, "property"],

		// Use `object.key`, not `object['key']`, whenever possible.
		"dot-notation": [2, {
			// Allow `object['a_key']`.
			"allowPattern": "^[a-z]+(_[a-z]+)+$"
		}],

		// Prefer `===` over `==`. To use `==` add an `eslint-disable-line eqeqeq` comment next to it.
		"eqeqeq": [2, "always"],

		// Allow `for (x in y)` loops to skip checks for `y.hasOwnProperty(x)`. We have not had a problem with this yet.
		"guard-for-in": 0,

		// Node.js does not have `alert()`, `prompt()`, or `confirm()`.
		"no-alert": 2,

		// Do not use `arguments.caller` or `arguments.callee`. If you do not know what these are, that is a good thing; JavaScript is trying to deprecate them.
		"no-caller": 2,

		// Never set vars inside `return` statements, like `return c++;`
		"no-return-assign": 2,

		// When concatenating strings, use as few string literals as possible. `'something'`, not `'some' + 'thing'`
		"no-useless-concat": 2,

		// Allow both `if (x === 'val')` and `if ('val' === x)`. todo: revisit?
		"yoda": 0,

		/*****************************
		* Strict Mode
		*****************************/

		// Always `'use strict';` at top of files.
		"strict": [2, "safe"],

		/*****************************
		* Variables
		*****************************/

		// Allow variables to be overwritten in callbacks, like `event`. Just be careful when doing this.
		"no-shadow": 0,

		// Do not overwrite JS core vars, like `var undefined = 'not undefined';`
		"no-shadow-restricted-names": 2,

		// Point out future ReferenceErrors.
		"no-undef": [2, {
			"typeof": true // `typeof` can swallow ReferenceErrors silently. `if (typeof window === 'undefined')`
		}],

		// Declare vars before using them. `var a = 'hi'; alert(a);`, not `alert(a); var a = 'hi';`
		"no-use-before-define": [2, {
			"functions": false
		}],

		/*****************************
		* Node.js and CommonJS
		*****************************/

		// All `require()` statements must always be in the top-level scope. Put them at the top of the file.
		"global-require": 2,

		// Never ignore an err in node.
		"handle-callback-err": [2, "^(err|error|err[A-Z].+|.+Error)$"],

		// Warn when using `process.exit()`. Only do this in tests.
		"no-process-exit": 1,

		/*****************************
		* Stylistic Issues
		*****************************/

		// `[1]`, not `[ 1 ]`
		"array-bracket-spacing": [2, "never"],

		// Require 1 true brace style for multi-line if statements. E.g.: http://eslint.org/docs/rules/brace-style#tbs
		"brace-style": [2, "1tbs"],

		// Allow snake_case. SQL: snake_case, JS: camelCase. Use snake_case for JS vars named after SQL vars.
		"camelcase": 0,

		// Prohibit comma after the last item in a list.
		"comma-dangle": ["error", {
			"arrays": "never", // `[1, 2]`, not `[1, 2,]`
			"objects": "never", // `{a: 1, b: 2}`, not `{a: 1, b:2,}`
			"imports": "never", // `import {a, b}`, not `import {a, b,}`
			"exports": "never", // `export {a, b}`, not `export {a, b,}`
			"functions": "ignore" // `function(a, b) {`, not `function(a, b,) {`
		}],

		// `var a, b, c`, not `var a,b,c` or `var a ,b ,c`
		"comma-spacing": [2, {
			"before": false,
			"after": true
		}],

		// Commas at end of line, not beginning of line.
		"comma-style": 2,

		// `obj[key]`, not `obj[ key ]`
		"computed-property-spacing": [2, "never"],

		// End all files with a newline.
		"eol-last": 2,

		// `next()`, not `next ()`
		"func-call-spacing": 2,

		// Use tabs, not spaces. Indent according to position in scope/expression. Basically, keep it neat.
		"indent": [2, "tab", {
			// In `switch { case: }` statements, indent `case` lines one more tab than the `switch` line.
			"SwitchCase": 1
		}],

		// `{id: 123}`, not `{id :123}`
		"key-spacing": [2, {
			"beforeColon": false,
			"afterColon": true
		}],

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

		// Allow long lines. Usually, explicitness > abstraction. But keep in mind that sometimes terseness === explicitness.
		"max-len": 0,

		// Allow multiple statements in one line. todo: revisit
		"max-statements-per-line": 0,

		// Capitalize constructor functions. `new Worker()`, not `new worker()`
		"new-cap": [2, {
			"capIsNew": false // Other functions can be capitalized too. `Assert()`
		}],

		// Use tabs, not spaces.
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],

		// `)};`, not `)}; 	`
		"no-trailing-spaces": 2,

		// Allow functions to begin with '_'. Do this for all private functions.
		"no-underscore-dangle": 0,

		// `exports.search`, not `exports .search`
		"no-whitespace-before-property": 2,

		// `{'a': 'b'}`, not `{ 'a': 'b' }`
		"object-curly-spacing": [2, "never"],

		// Allow both `<li> +` and `+ <li>`. todo: revisit
		"operator-linebreak": 0,

		// JS: single quotes, SQL: double quotes
		"quotes": [0, "single", "avoid-escape"],

		// Use semicolons; Always;
		"semi": 2,

		// Never put whitespace before semicolons, and always put either a newline or a space after semicolons.
		"semi-spacing": [2, {
			"before": false, // `next();`, not `next() ;`
			"after": true // `case 0: x = 'x'; break;`, not `case 0: x = 'x';break;`
		}],

		// `function() {` not `function(){`
		"space-before-blocks": [2, {
			"functions": "always",
			"keywords": "always",
			"classes": "never"
		}],

		// `if (err)`, not `if ( err )`
		"space-in-parens": [2, "never"],

		// Space before ternary operator is optional. `(_.isArray(pkeys))? pkeys : [pkeys];`
		"space-infix-ops": 0,

		// `c++`, not `c ++`
		"space-unary-ops": 2,

		/*****************************
		* Deprecated
		*****************************/

		/*****************************
		* Ours
		*****************************/

		// Verify filenames in `require()` statements have correct capitalization.
		"lowercase-require": 2,

		// Prefer `Async.eachSeries` over `Async.each`. To use `Async.each` add an `eslint-disable-line async-series` comment next to it.
		"async-series": 1,

		/*****************************
		* External Plugins
		*****************************/

		// Verify all modules are in package.json.
		"import/no-extraneous-dependencies": [2],

		// Verify modules exist on the filesystem and that filepaths in `require` statements are correct.
		"import/no-unresolved": [2, {"commonjs": true}]
	}
};
