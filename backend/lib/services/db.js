'use strict'
const Sequelize = require('sequelize')
const configManager = require('../util/configManager')

const dbConfig = configManager.getConfig('db')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password)

module.exports = sequelize