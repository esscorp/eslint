'use strict';

//https://gist.github.com/jareware/7179093
module.exports = function(context) {
	return {
		CallExpression: function(node){
			var callee = node.callee;
			var name = callee.name;
			var param = (node.arguments.length)? node.arguments[0].value : false;
			if (name === 'require' && typeof param === 'string')	{
				if (param.toLowerCase() !== param) context.report(node, "Lowercase require() paths");
			}
		}
	};
};
