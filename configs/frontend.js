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

		// spacing
		"object-curly-spacing": [2, "never"],
		"array-bracket-spacing": [2, "never"],
		"computed-property-spacing": [2, "never"],
		"keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}],

		"brace-style": [2, "1tbs"],
		"new-cap": [2, {"capIsNew": false}], //I like `Assert()
		"no-underscore-dangle" : 0, //Using leading underscore to indicate private fnc
		"camelcase": 0, //
		"no-shadow": 0, //we use the variable event everywhere
		"strict": [1, "function"]
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
