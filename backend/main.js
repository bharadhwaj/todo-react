'use strict'

const bodyParser = require('body-parser')
// const config = require('node-config-manager')
const express = require('express')

const app = express()

const router = require('./lib/routes')
const configManager = require('./lib/util/configManager')
const port = process.env.PORT || 8888

// app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ 'extended' : 'true' }))
app.use(bodyParser.json())
app.use(bodyParser.json({ type : 'application/vnd.api+json' }))

app.use(router)

app.listen(port)
console.log('App listening on port:' + port)