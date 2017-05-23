'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../services/db')
const Todos = require('../model/todos')

class TodoClass {

	createTodo(todoDetails) {
		return sequelize.sync()
		.then(() => {
			return Todos.create({
				id : todoDetails.id,
				text : todoDetails.text,
				userEmail : todoDetails.userEmail,
			})
			.then(todo => {
				console.log('\n New entry added: \n ', todo.dataValues)
				return ({ status: 'SUCCESS', todo : todo })
			})
			.catch(Sequelize.Error, err => {
				console.log('\n Sequelize Error in addTodo: \n ', err.errors)
				let errors = [ ]
				err.errors.forEach(error => {
					errors.push({
						'message': error.message,
						'param': error.path,
						'value': error.value,
					})
				})
				return ({ status : 'FAILED', error : errors })
			})
			.catch(err => {
				console.log('\n Error in addTodo: \n ', err)
				return ({ status : 'FAILED', error : err })
			})
		})

	}

	toggleTodo(todoDetails) {
		return sequelize.sync()
		.then(() => {
			return Todos.update({
				complete : todoDetails.complete,
			},
			{
				where : { id : todoDetails.id }
			})
			.then(todo => {
				console.log('\n Toggled the complete: \n ', todo)
				return ({ status: 'SUCCESS', todo : todo })
			})
			.catch(Sequelize.Error, err => {
				console.log('\n Sequelize Error in toggleTodo: \n ', err.errors)
				let errors = [ ]
				err.errors.forEach(error => {
					errors.push({
						'message': error.message,
						'param': error.path,
						'value': error.value,
					})
				})
				return ({ status : 'FAILED', error : errors })
			})
			.catch(err => {
				console.log('\n Error in addTodo: \n ', err)
				return ({ status : 'FAILED', error : err })
			})
		})

	}

	removeTodo(id) {
		return sequelize.sync()
		.then(() => {
			return Todos.destroy({
				where : {
					id : id,
				}
			})
			.then(response => {
				if (response === 1){
					console.log('Successfully deleted')
					return ({ status: 'SUCCESS', message : 'Successfully deleted' })
				}
				else {
					console.log('Deletion failed')
					return ({ status: 'FAILED', message : 'No such element to delete' })
				}
			})
			.catch(Sequelize.Error, err => {
				console.log('\n Sequelize Error in addTodo: \n ', err.errors)
				let errors = [ ]
				err.errors.forEach(error => {
					errors.push({
						'message': error.message,
						'parameter': error.path,
						'value': error.value,
					})
				})
				return ({ status : 'FAILED', error : errors })
			})
			.catch(err => {
				console.log('\n Error in addTodo: \n ', err)
				return ({ status : 'FAILED', error : err })
			})
		})
	}

	getAllTodos(userEmail) {
		return sequelize.sync()
		.then(() => {
			return Todos.findAll({
				where : {
					userEmail : userEmail
				}
			})
			.then(allTodos => {
				console.log('\n Successfully fetched all todos.\n ')
				return ({ status: 'SUCCESS', allTodos : allTodos })
			})
			.catch(Sequelize.Error, err => {
				console.log('\n Sequelize Error in addTodo: \n ', err.errors)
				let errors = [ ]
				err.errors.forEach(error => {
					errors.push({
						'message': error.message,
						'parameter': error.path,
						'value': error.value,
					})
				})
				return ({ status : 'FAILED', error : errors })
			})
			.catch(err => {
				console.log('\n Error in addTodo: \n ', err)
				return ({ status : 'FAILED', error : err })
			})
		})
	}
}

module.exports = TodoClass
