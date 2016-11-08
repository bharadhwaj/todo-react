'use strict'
const todo = require('../dao/todoTable')

module.exports = {

	addTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		todo.createTodo(req, res)
	},

	removeTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		todo.removeTodo(req, res)
	}
}