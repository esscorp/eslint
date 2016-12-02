'use strict';

var Config = require('./configs/backend');

delete Config.rules['lowercase-require'];


module.exports = Config;
