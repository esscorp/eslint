module.exports = {
	"extends": "eslint:recommended",
	"rules": {
		"curly": 0, //I like `if (error) return next(error);`
		"space-infix-ops" : 0, //I like `(_.isArray(pkeys))? pkeys : [pkeys];`
		"quotes": [0, "single", "avoid-escape"], // we like double outer quotes with single inner quotes for SQL and only single quotes for JS
		"block-scoped-var": 2,
		"keywords-spacing": [2, "always"],
		"brace-style": [2, "1tbs"],
		"space-in-brackets": [2, "never"],
		"new-cap": [2, {"capIsNew": false}], //I like `Assert()
		"no-underscore-dangle" : 0, //Using leading underscore to indicate private fnc
		"camelcase": 0, //
		"no-shadow": 0, //we use the variable error everywhere
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
	},
	"env": {
		"node": true,
		"browser": false,
		"mocha": true
	},
	"globals": {
	}
};
