'use strict';


// https://gist.github.com/jareware/7179093
module.exports = {
	meta: {
		docs: {
			description: 'require module names in `require()` calls to be lowercase',
			category: 'Node.js and CommonJS',
			recommended: true
		},
		fixable: false,
		schema: []
	},
	create: function(context) {
		return {
			'CallExpression[callee.name="require"][arguments.length=1] > :first-child': function(node) {

				var modulePath = node.value;

				if (isLowerCase(modulePath)) return;

				context.report({
					message: '\'' + modulePath + '\' is not lowercase.',
					node: node
				});
			}
		};
	}
};

function isLowerCase(str) {
	return (str.toLowerCase() === str);
}
