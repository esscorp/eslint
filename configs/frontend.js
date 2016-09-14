'use strict';

// eslint rules
// 0 = off
// 1 = generate warning
// 2 = fail immediately

//http://eslint.org/docs/rules/
module.exports = {
	"rules": {
		"curly": 0, //I like `if (error) return next(error);`
		"space-infix-ops" : 0, //I like `(_.isArray(pkeys))? pkeys : [pkeys];`
		"quotes": [2, "single", "avoid-escape"],
		"block-scoped-var": 2,
		"space-after-keywords": [2, "always"],
		"brace-style": [2, "1tbs"],
		"space-in-brackets": [2, "never"],
		"new-cap": [2, {"capIsNew": false}], //I like `Assert()
		"no-underscore-dangle" : 0, //Using leading underscore to indicate private fnc
		"camelcase": 0, //allow snake_case for SQL (use camelCase otherwise)
		"no-shadow": 0, //allow variables to be overwritten in callbacks (e.g. `event`)
		"strict": [1, "global"], //require `use strict` at the top of the global scope

		"object-curly-spacing": [2, "never"], //`{'a': 'b'}`, not `{ 'a': 'b' }`
		"array-bracket-spacing": [2, "never"], //`[1, 2, 3]`, not `[1,2 ,3]`
		"computed-property-spacing": [2, "never"], //`obj[key]`, not `obj[ key ]`
		"keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}], //`for ()`, not `for()`

		"no-trailing-spaces": 2, //`var x = 0;`, not `var x = 0;	`
		"eol-last": 2, //require newline at end of every file
		"semi": 2, //require semicolon at end of every statement

		"no-undef": [2, {"typeof": true}], //find future ReferenceErrors
		"no-use-before-define": [2, {"functions": false}], //variables must be declared before they are used. `var a = 'hi'; alert(a);`, not `alert(a); var a = 'hi';`
		"global-require": 2, //require statements must be in top-level scope
		"indent": [2, "tab", {"SwitchCase": 1}], // Indent according to position in scope/expression. Indent case statements.
		"comma-style": 2, //commas at end of line, not beginning of line
		"no-whitespace-before-property": 2, //`exports.search`, not `exports .search`
		"no-shadow-restricted-names": 2, //disallow overwrite of JS global identifiers, like `var undefined = 'not undefined';`

		"dot-notation": [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}], //`object.key`, not `object['key']`, but allow `object['a_key']`
		"space-before-function-paren": [2, "never"], //`function()`, not `function ()`
		"no-spaced-func": 2, //`aFunc()`, not `aFunc ()`
		"space-in-parens": [2, "never"], //`search(arg)`, not `search( arg )`
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"], //either tabs or spaces, not both
		"array-callback-return": 2, //make sure `return` isn`t forgotten in array mapping methods

		"key-spacing": [2, {"beforeColon": false, "afterColon": true}], //`{a: 0}`, not `{a :0}`
		"space-unary-ops": 2, //`i++`, not `i ++`
		"semi-spacing": [2, {"before": false, "after": true}], //`case true: x = 'x'; break;`, not `case true: x = 'x' ;break ;`
		"no-return-assign": 2, //disallow `return x = 0;`
		"no-useless-concat": 2, //disallow string literal concatenation: `'a' + 'b'`

		"space-before-blocks": [2, {"functions": "always", "keywords": "always", classes: "never"}] //`function() {` not `function(){`
	},
	"env": {
		"node": false,
		"browser": true,
		"jquery": true
	},
	"globals": {
		"App": false,
		"Backbone": false,
		"_": false,
		"$": false,
		"Handlebars": false,
		"console": false,
		"Tour": false
	}
};
