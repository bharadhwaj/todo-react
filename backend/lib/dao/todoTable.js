'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../services/db')
const Todos = require('../model/todos')

module.exports = {

	createTodo(req, res) {
		return sequelize.sync()
		.then(() => {
			Todos.create({
				id : req.body.id,
				text : req.body.text,
			})
			.then(todo => {
				console.log('\n New entry added: \n ', todo.dataValues)
				res.json({ status: 'SUCCESS', todo : todo }) 
			})
			.catch(Sequelize.Error, err => {
					console.log('\n Sequelize Error in addTodo: \n ', err.errors)
					var errors = []
					err.errors.forEach(error => {
						errors.push({
							'message': error.message,
							'param': error.path,
							'value': error.value,
						})
					})
					res.json({ status : 'FAILED', error : errors })
				})
			.catch(err => {
				res.json({ status : 'FAILED', error : err })
				console.log('\n Error in addTodo: \n ', err) 
			})
		})
	},

	removeTodo(req, res) {
		return sequelize.sync()
		.then(() => {
			Todos.destroy({
				where : {
					id : req.params.id,
				}
			})
			.then(response => {
				console.log('\n Successfully deleted: \n ', response)
				res.json({ status: 'SUCCESS', message : 'Successfully deleted' }) 
			})
			.catch(Sequelize.Error, err => {
					console.log('\n Sequelize Error in addTodo: \n ', err.errors)
					var errors = []
					err.errors.forEach(error => {
						errors.push({
							'message': error.message,
							'parameter': error.path,
							'value': error.value,
						})
					})
					res.json({ status : 'FAILED', error : errors })
				})
			.catch(err => {
				res.json({ status : 'FAILED', error : err })
				console.log('\n Error in addTodo: \n ', err) 
			})
		})
	},

	getAllTodos(req, res) {
		return sequelize.sync()
		.then(() => {
			Todos.findAll({})
			.then(allTodos => {
				console.log('\n Successfully fetched all todos.\n ')
				res.json({ status: 'SUCCESS', allTodos : allTodos }) 
			})
			.catch(Sequelize.Error, err => {
					console.log('\n Sequelize Error in addTodo: \n ', err.errors)
					var errors = []
					err.errors.forEach(error => {
						errors.push({
							'message': error.message,
							'parameter': error.path,
							'value': error.value,
						})
					})
					res.json({ status : 'FAILED', error : errors })
				})
			.catch(err => {
				res.json({ status : 'FAILED', error : err })
				console.log('\n Error in addTodo: \n ', err) 
			})
		})
	}
}