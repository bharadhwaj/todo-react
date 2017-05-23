'use strict'

const configManager = require('node-config-manager')

const options = {
	configDir : './config',
	env : process.env.NODE_ENV || 'development',
	camelCase : true
}

configManager.init(options);
configManager.addConfig('app')
configManager.addConfig('db')
// configManager.addConfig('logger');

module.exports = configManager