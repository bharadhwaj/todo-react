'use strict'
const Sequelize = require('sequelize')
const sequelize = require('../services/db')
const Todos = require('../model/todo')

module.exports = {

	addTodo(req, res) {

		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		
		sequelize.sync()
		.then(() => {
			Todos.create({
				id : req.body.id,
				text : req.body.text,
			})
			.then(todo => {
				console.log('\n New entry added: \n ', todo.dataValues)
				res.json({ status: 'SUCCESS', todo : todo }) 
			})
			.catch(Sequelize.Error, (err) => {
					console.log('\n Sequelize Error in addTodo: \n ', err.errors)
					var errors = []
					err.errors.forEach((error) => {
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

		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		
		sequelize.sync()
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
			.catch(Sequelize.Error, (err) => {
					console.log('\n Sequelize Error in addTodo: \n ', err.errors)
					var errors = []
					err.errors.forEach((error) => {
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