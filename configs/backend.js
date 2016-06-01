'use strict';

// eslint rules
// 0 = off
// 1 = generate warning
// 2 = fail immediately

//http://eslint.org/docs/rules/

module.exports = {
	"extends": "eslint:recommended",
	"rules": {
		"curly": 0, //allow `if (error) return next(error);`
		"space-infix-ops": 0, //allow no space before ternary operator, e.g., `(_.isArray(pkeys))? pkeys : [pkeys];`
		"quotes": [0, "single", "avoid-escape"], //allow double quotes. (JS: single outer quotes; SQL: double outer quotes, single inner quotes)
		"block-scoped-var": 2, //vars assigned withing `if` statements must be declared outside of them
		"brace-style": [2, "1tbs"], //require `if () {` and `} else {`
		"new-cap": [2, {"capIsNew": false}], //`new Worker()`, not `new worker()`; allow `Assert()
		"no-underscore-dangle": 0, //allow leading underscore to indicate private functions
		"camelcase": 0, //allow snake_case for SQL (use camelCase otherwise)
		"comma-spacing": [2, {"before": false, "after": true}], //`var a, b, c`, not `var a,b ,c`
		"no-process-exit": 1, //warn when using `process.exit()`. (allow in tests)

		"no-console": [0], //this is node.js so allow console.* commands

		//spacing
		"object-curly-spacing": [2, "never"], //`{'a': 'b'}`, not `{ 'a': 'b' }`
		"array-bracket-spacing": [2, "never"], //`[1, 2, 3]`, not `[1,2 ,3]`
		"computed-property-spacing": [2, "never"], //`obj[key]`, not `obj[ key ]`
		"keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}], //`for ()`, not `for()`

		"handle-callback-err": [2, "^(err|error|.+Error)$"], //require all node callbacks to handle errors

		//formatting
		"no-trailing-spaces": 2, //`var x = 0;`, not `var x = 0;	`
		"eol-last": 2, //require newline at end of every file
		"semi": 2, //require semicolon at end of every statement

		/* Ideas */

		// Very useful and easy to implement
		"no-undef": [2, {"typeof": true}], //find future ReferenceErrors
		"no-use-before-define": [2, {"functions": false}], //variables must be declared before they are used. `var a = 'hi'; alert(a);`, not `alert(a); var a = 'hi';`
		"global-require": 2, //require statements must be in top-level scope
		"indent": [2, "tab", {"SwitchCase": 1}], // Indent according to position in scope/expression. Indent case statements.
		"comma-style": 2, //commas at end of line, not beginning of line
		"no-whitespace-before-property": 2, //`exports.search`, not `exports .search`
		"no-shadow-restricted-names": 2, //disallow overwrite of JS global identifiers, like `var undefined = 'not undefined';`
		"strict": [2, "safe"], //require `use strict` at the top of every file/module

		// Useful but more difficult to implement
		// "no-shadow": [2, {"allow": ["error", "err", "next"]}], //allow variables to be overwritten in callbacks (e.g. `event`)

		// Less useful
		"dot-notation": [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}], //`object.key`, not `object['key']`, but allow `object['a_key']`
		"space-before-function-paren": [2, "never"], //`function()`, not `function ()`
		"no-spaced-func": 2, //`aFunc()`, not `aFunc ()`
		"space-in-parens": [2, "never"], //`search(arg)`, not `search( arg )`
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"], //either tabs or spaces, not both
		"array-callback-return": 2, //make sure `return` isn`t forgotten in array mapping methods

		// Picky
		"key-spacing": [2, {"beforeColon": false, "afterColon": true}], //`{a: 0}`, not `{a :0}`
		"space-unary-ops": 2, //`i++`, not `i ++`
		"semi-spacing": [2, {"before": false, "after": true}], //`case true: x = 'x'; break;`, not `case true: x = 'x' ;break ;`
		"no-return-assign": 2, //disallow `return x = 0;`
		"no-useless-concat": 2, //disallow string literal concatenation: `'a' + 'b'`

		// Unsure of usefulness
		// "max-len": [2, {
		// 	"code": 120,
		// 	"ignoreComments": true,
		// 	"ignoreTrailingComments": true,
		// 	"ignoreUrls": true,
		// 	"ignorePattern":
		// 	"^.*(return)|(new Error\\().*$"
		// }],
		"space-before-blocks": [2, {"functions": "always", "keywords": "always", classes: "never"}], //`function() {` not `function(){`

		// Discussed and decided against
		// "consistent-return": 2, //if a function can return a variable, make sure it always does
		// "max-statements-per-line": [2, {"max": 1}],
		// "operator-linebreak": [2, "after", {"overrides": {"?": "before", ":": "before"}}], //`</ul> +`, not `+ </ul>`
		// "yoda": 2, // `if (x < 0)`, not `if (0 > x)`

		//our rules
		"lowercase-require": 2 //deploy will fail otherwise
	},
	"env": {
		"node": true,
		"browser": false,
		"mocha": true
	},
	"globals": {
	}
};
