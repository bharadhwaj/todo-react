'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../services/db')

const Todos = sequelize.define('Todos', {
	id : {
		type : Sequelize.BIGINT,
		primaryKey: true,
		allowNull : false,
		validate:  {
			isNumeric: true,
			notEmpty: true,
		}
	},
	text : {
		type : Sequelize.STRING,
		allowNull : false,
		validate : {
			notEmpty: true
		}
	},
	complete : {
		type : Sequelize.BOOLEAN,
		defaultValue: false
	}
}, {
	comment: "Table used for storing the Todos."
})

module.exports = Todos