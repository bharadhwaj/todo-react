'use strict'
const TodoClass = require('../dao/todoTable')
const todo = new TodoClass()

module.exports = {

	getAllTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'GET')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
<<<<<<< HEAD
		todo.getAllTodos(req.params.email)
=======
		todo.getAllTodos()
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
		.then(todoResponse => { res.json(todoResponse) })
	},

	addTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
<<<<<<< HEAD
		let todoDetails = { id : req.body.id, text : req.body.text, userEmail : req.body.userEmail}
		todo.createTodo(todoDetails)
				.then(todoResponse => { res.json(todoResponse) })
=======
		let todoDetails = { id : req.body.id, text : req.body.text }
		todo.createTodo(todoDetails)
		.then(todoResponse => { res.json(todoResponse) })
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
	},

	toggleTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		let todoDetails = { id : req.body.id, complete : req.body.complete }
		todo.toggleTodo(todoDetails)
<<<<<<< HEAD
				.then(todoResponse => { res.json(todoResponse) })
=======
		.then(todoResponse => { res.json(todoResponse) })
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
	},

	removeTodo(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*')//req.header('Origin'))
		res.setHeader('Access-Control-Allow-Methods', 'POST')
		res.setHeader('Access-Control-Allow-Credentials', 'true')
		todo.removeTodo(req.params.id)
<<<<<<< HEAD
				.then(todoResponse => { res.json(todoResponse) })
	}
}
=======
		.then(todoResponse => { res.json(todoResponse) })
	}
}
>>>>>>> a067d2a2b968be4bc21e74986d74df610e6d2569
