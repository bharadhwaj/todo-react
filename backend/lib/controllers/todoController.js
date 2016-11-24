'use strict'
const TodoClass = require('../dao/todoTable')
const todo = new TodoClass()

module.exports = {

	getAllTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'GET')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		todo.getAllTodos()
		.then(todoResponse => { res.json(todoResponse) })
	},

	addTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		let todoDetails = { id : req.body.id, text : req.body.text }
		todo.createTodo(todoDetails)
		.then(todoResponse => { res.json(todoResponse) })
	},

	toggleTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		let todoDetails = { id : req.body.id, complete : req.body.complete }
		todo.toggleTodo(todoDetails)
		.then(todoResponse => { res.json(todoResponse) })
	},

	removeTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		todo.removeTodo(req.params.id)
		.then(todoResponse => { res.json(todoResponse) })
	}
}