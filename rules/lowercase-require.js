'use strict';


// https://gist.github.com/jareware/7179093
module.exports = {
	meta: {
		docs: {
			description: 'disallow capital letters in `require()` statements',
			category: 'Node.js and CommonJS',
			recommended: true
		},
		fixable: false,
		schema: []
	},
	create: function(context) {
		return {
			CallExpression: function(node) {

				var callee = node.callee;
				var name = callee.name;
				var args = node.arguments;

				if (name !== 'require') return;
				if (args.length === 0) return;

				var param = args[0].value;

				if (typeof param !== 'string') return;

				var valid = (param.toLowerCase() === param);
				if (valid) return;

				context.report({
					message: 'Lowercase `require()` paths',
					node: node
				});
			}
		};
	}
};
