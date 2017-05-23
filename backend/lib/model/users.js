'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../services/db')

const Users = sequelize.define('Users', {
	userEmail : {
		type : Sequelize.STRING,
		primaryKey: true,
		allowNull : false,
		validate : {
			notEmpty: true,
			isEmail: true
		}
	},
	userName : {
		type : Sequelize.STRING,
		allowNull : false,
		validate : {
			notEmpty: true
		}
	}
}, {
	comment: "Table used to store user details."
})

module.exports = Users
