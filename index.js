'use strict';

exports.configs = {
	backend: require('./configs/backend'),
	frontend: require('./configs/frontend')
};

exports.rules = {
	lowercaseRequire: require('./rules/lowercase-require')
};
