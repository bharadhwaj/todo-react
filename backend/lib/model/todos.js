'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../services/db')

<<<<<<< HEAD
const Users = require('./users')

=======
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
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

<<<<<<< HEAD
Todos.belongsTo(Users, { foreignKey: 'userEmail', foreignKeyConstraint: true, onDelete : 'CASCADE', onUpdate : 'CASCADE'})

module.exports = Todos
=======
module.exports = Todos
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
