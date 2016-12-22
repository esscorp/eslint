'use strict';


// https://insideops.wordpress.com/2015/12/08/creating-custom-rules-for-eslint/comment-page-1/#comment-17
module.exports = {
	meta: {
		docs: {
			description: 'disallow `Async.each()`',
			category: 'Node.js and CommonJS',
			recommended: false
		},
		fixable: false,
		schema: []
	},
	create: function(context) {
		return {
			CallExpression: function(node) {

				var callee = node.callee;
				var object = callee.object;
				var property = callee.property;

				if (!object) return;
				if (!property) return;
				if (object.name !== 'Async') return;
				if (property.name !== 'each') return;

				context.report({
					node: node,
					message: 'Use `Async.eachSeries()` instead. Or add an `eslint-disable-line async-each` comment to run this loop in parallel.'
				});
			}
		};
	}
};
