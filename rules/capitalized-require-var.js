'use strict';


module.exports = {
	meta: {
		docs: {
			description: 'require variable names for modules imported by `require()` calls to begin with a capital letter',
			category: 'Node.js and CommonJS',
			recommended: true
		},
		fixable: false,
		schema: []
	},
	create: function(context) {
		return {
			'VariableDeclarator CallExpression[callee.name="require"][arguments.length=1]': function(node) {

				var variableDeclarator = closestByType(node, 'VariableDeclarator');
				var id = variableDeclarator.id;
				var varName = id.name;

				if (isCapitalized(varName)) return;

				context.report({
					message: '\'' + varName + '\' is not capitalized.',
					node: node
				});
			}
		};
	}
};

function closestByType(node, type) {

	var parent = node.parent;

	// base case
	if (parent === null) return null;
	if (parent.type === type) return parent;

	// recursive case
	return closestByType(parent, type);
}

function isCapitalized(str) {
	var firstLetter = str[0];
	return (firstLetter.toUpperCase() === firstLetter);
}
