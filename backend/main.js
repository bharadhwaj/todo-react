'use strict'

const bodyParser = require('body-parser')
// const config = require('node-config-manager')
const express = require('express')

const app = express()

const router = require('./lib/routes')
const configManager = require('./lib/util/configManager')

const appConfig = configManager.getConfig('app')
// const port = process.env.PORT || 8888

// app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ 'extended' : 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type : 'application/vnd.api+json' }))



try {
	app.use(router)
	const server = app.listen(appConfig.port, appConfig.host, () => {
		const host = server.address().address;
		const port = server.address().port;
		console.log('App listening on ' + host+':'+port)

		// log.info(`Server started: ${ configManager.env }`);
		// log.info('port:' + port + 'host:' + host);
	})
	module.exports = { app }
} catch (error) {
	console.log('Error in main.js:', error)
	// log.error(`Error Occured: ${error.stack}`);
}