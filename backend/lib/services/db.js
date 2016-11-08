'use strict'
const Sequelize = require('sequelize')
const dbConfig = require('../../config/development/db') //(__dirname+'config/development/db')

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password)

module.exports = sequelize