'use strict';

// eslint rules
// 0 = off
// 1 = generate warning
// 2 = fail immediately

// http://eslint.org/docs/rules/

module.exports = {
	"rules": {
		"curly": 0, // allow `if (err) return next(err);`
		"space-infix-ops" : 0, // allow no space before ternary operator, e.g., `(_.isArray(pkeys))? pkeys : [pkeys];`
		"quotes": [2, "single", "avoid-escape"],
		"block-scoped-var": 2,

		// spacing
		"object-curly-spacing": [2, "never"],
		"array-bracket-spacing": [2, "never"],
		"computed-property-spacing": [2, "never"],
		"keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}],

		"brace-style": [2, "1tbs"], // require `if () {` and `} else {`
		"new-cap": [2, {"capIsNew": false}], //`new Worker()`, not `new worker()`; allow `Assert()
		"no-underscore-dangle" : 0, // allow leading underscore to indicate private functions
		"camelcase": 0, // allow snake_case for SQL (use camelCase otherwise)
		"no-shadow": 0, // allow variables to be overwritten in callbacks (e.g. `event`)
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
