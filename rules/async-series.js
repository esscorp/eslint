'use strict';


// https://insideops.wordpress.com/2015/12/08/creating-custom-rules-for-eslint/comment-page-1/#comment-17
module.exports = {
	meta: {
		docs: {
			description: 'disallow parallel methods from `Async` package',
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

				var preferred;
				switch (property.name) {
					case 'each': preferred = 'eachSeries'; break;
					case 'eachOf': preferred = 'eachOfSeries'; break;
					case 'map': preferred = 'mapSeries'; break;
					default: return;
				}

				context.report({
					node: node,
					message: 'Use `Async.' + preferred + '()` instead. Or add an `eslint-disable-line async-series` comment to run this loop in parallel.'
				});
			}
		};
	}
};
