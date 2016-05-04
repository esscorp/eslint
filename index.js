'use strict';

var Backend = require('./configs/backend');
var Frontend = require('./configs/frontend');
// var LowercaseRequire = require('./rules/lowercase-require');

exports.configs = {
	backend: Backend,
	frontend: Frontend
};

// exports.rules = {
// 	'lowercase-require': LowercaseRequire
// };
