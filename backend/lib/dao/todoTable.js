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
<<<<<<< HEAD
				userEmail : todoDetails.userEmail,
=======
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
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
<<<<<<< HEAD
				console.log('\n Error in addTodo: \n ', err)
				return ({ status : 'FAILED', error : err })
			})
		})

=======
				console.log('\n Error in addTodo: \n ', err) 
				return ({ status : 'FAILED', error : err })
			})
		})
			
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
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
<<<<<<< HEAD
				console.log('\n Error in addTodo: \n ', err)
				return ({ status : 'FAILED', error : err })
			})
		})

=======
				console.log('\n Error in addTodo: \n ', err) 
				return ({ status : 'FAILED', error : err })
			})
		})
			
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
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
<<<<<<< HEAD
					return ({ status: 'SUCCESS', message : 'Successfully deleted' })
				}
				else {
					console.log('Deletion failed')
					return ({ status: 'FAILED', message : 'No such element to delete' })
=======
					return ({ status: 'SUCCESS', message : 'Successfully deleted' }) 
				}
				else {
					console.log('Deletion failed')
					return ({ status: 'FAILED', message : 'No such element to delete' }) 
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
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
<<<<<<< HEAD
				console.log('\n Error in addTodo: \n ', err)
=======
				console.log('\n Error in addTodo: \n ', err) 
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
				return ({ status : 'FAILED', error : err })
			})
		})
	}

<<<<<<< HEAD
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
=======
	getAllTodos() {
		return sequelize.sync()
		.then(() => {
			return Todos.findAll({})
			.then(allTodos => {
				console.log('\n Successfully fetched all todos.\n ')
				return ({ status: 'SUCCESS', allTodos : allTodos }) 
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
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
<<<<<<< HEAD
				console.log('\n Error in addTodo: \n ', err)
=======
				console.log('\n Error in addTodo: \n ', err) 
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
				return ({ status : 'FAILED', error : err })
			})
		})
	}
}

<<<<<<< HEAD
module.exports = TodoClass
=======
module.exports = TodoClass
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
