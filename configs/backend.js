// eslint rules
// 0 = off
// 1 = generate warning
// 2 = fail immediately

//http://eslint.org/docs/rules/

module.exports = {
	"extends": "eslint:recommended",
	"rules": {
		"curly": 0, //I like `if (error) return next(error);`
		"space-infix-ops": 0, //I like `(_.isArray(pkeys))? pkeys : [pkeys];`
		"quotes": [0, "single", "avoid-escape"], // we like double outer quotes with single inner quotes for SQL and only single quotes for JS
		"block-scoped-var": 2,
		"brace-style": [2, "1tbs"],
		"new-cap": [2, {"capIsNew": false}], //I like `Assert()
		"no-underscore-dangle": 0, //Using leading underscore to indicate private fnc
		"camelcase": 0, //we use snake case for SQL
		"comma-spacing": [2, {"before": false, "after": true}],
		"no-process-exit": 1,

		//our rules
		"lowercase-require": 2, //deploy will fail otherwise

		//this is node.js so allow console.* commands
		"no-console": [0],

		//spacing
		"object-curly-spacing": [2, "never"],
		"array-bracket-spacing": [2, "never"],
		"computed-property-spacing": [2, "never"],
		"keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}],

		//verify all node callbacks check for errors
		"handle-callback-err": [2, "^(err|error|.+Error)$"],

		//formatting
		"no-trailing-spaces": 2,
		"eol-last": 2,
		"semi": 2,

		/* Ideas */

		// Very useful and easy to implement
		"no-undef": [2, {"typeof": true}], //find future ReferenceErrors
		"no-use-before-define": [2, {"functions": false}], //variables must be declared before they are used. 'var a = "hi"; alert(a);', not 'alert(a); var a = "hi";'
		"global-require": 2, //require statements must be in top-level scope
		"indent": [2, "tab", {"SwitchCase": 1}], // Indent according to position in scope/expression. Indent case statements.
		"comma-style": 2, //commas at end of line, not beginning of line
		"no-whitespace-before-property": 2, //'exports.search', not 'exports .search'
		"no-shadow-restricted-names": 2, //disallow overwrite of JS global identifiers, like 'var undefined = "not undefined";'
		"strict": [2, "safe"], //make sure 'use strict' is at the top of files

		// Useful but more difficult to implement
		// "no-shadow": [2, {"allow": ["error", "err", "next"]}], //we use the variable error everywhere

		// Less useful
		"dot-notation": [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}], //'object.key', not 'object["key"]', but allow 'object["a_key"]'
		"space-before-function-paren": [2, "never"], //'function()', not 'function ()'
		"no-spaced-func": 2, //'aFunc()', not 'aFunc ()'
		"space-in-parens": [2, "never"], //'search(arg)', not 'search( arg )'
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"], //either tabs or spaces, not both
		"array-callback-return": 2, //make sure 'return' isn't forgotten in array mapping methods

		// Picky
		"key-spacing": [2, {"beforeColon": false, "afterColon": true}], //'{a: 0}', not '{a :0}'
		"space-unary-ops": 2, //'i++', not 'i ++'
		"semi-spacing": [2, {"before": false, "after": true}], //'case true: x="x"; break;', not 'case true: x="x" ;break ;'
		"no-return-assign": 2, //disallow 'return x = 0;'
		"no-useless-concat": 2 //disallow string literal concatenation: '"a" + "b"'

		// Unsure of usefulness
		// "max-len": [2, {
		// 	"code": 120,
		// 	"ignoreComments": true,
		// 	"ignoreTrailingComments": true,
		// 	"ignoreUrls": true,
		// 	"ignorePattern":
		// 	"^.*(return)|(new Error\\().*$"
		// }],
		// "space-before-blocks": [2, {"functions": "always", "keywords": "always", classes: "never"}] //do we want 'function(){' or 'function() {'?

		// Discussed and decided against
		// "consistent-return": 2, //if a function can return a variable, make sure it always does
		// "max-statements-per-line": [2, {"max": 1}],
		// "operator-linebreak": [2, "after", {"overrides": {"?": "before", ":": "before"}}], //'</ul> +', not '+ </ul>'
		// "yoda": 2, // 'if (x < 0)', not 'if (0 > x)'
	},
	"env": {
		"node": true,
		"browser": false,
		"mocha": true
	},
	"globals": {
	}
};
